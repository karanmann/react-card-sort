export const Teams = () => {

  const { user } = useAuth0()
  const { name, picture, email } = user

  const [searchTerm, setSearchTerm] = useState('')
  const [teamData, setTeamData] = useState('')
  const [fetchFinished, setFetchFinished] = useState(false)
  const [teamName, setTeamName] = useState('Aline')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  // const [teamName, setTeamName] = useState('ProCivitas')

  let companyName = null
  
  if (email === 'procivitas@alinebetter.com') {
      companyName = 'ProCivitas'
  } else {
    companyName = 'Aline'
  } 

  const teamsURL = `https://staging-api.alinebetter.com/company/team?name=${companyName}&aggregated=false`
  // const teamsURL = `https://staging-api.alinebetter.com/company/activity?name=${teamName}&aggregated=false`
  
  useEffect(async() => {
    await axios(teamsURL)
      .then(response => {
        setTeamData(response.data)
        setFetchFinished(true)
      })
      .catch(error => console.error(error))
  }, [companyName])

  const totalUsers = teamData.length

  const toggle = (event) => {
    event.preventDefault()
    setDropdownOpen(prevState => !prevState)
  }

  if (!fetchFinished) return <SpinnerComponent />

  console.log(teamData)
  return (
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Team">
          <TeamTitle>Team</TeamTitle>
          <TeamContainer>
            <div>
              <p> 
                <Search
                  type='text' 
                  placeholder='🔍 Search...'
                  onChange={event => setSearchTerm(event.target.value)}
                />
              </p>  
            </div>
            {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle color='grey' nav caret>
                Teams <VscTriangleDown />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setTeamName('Aline')}>Aline(Default)</DropdownItem>
                <DropdownItem onClick={() => setTeamName('ProCivitas')}>ProCivitas</DropdownItem>
                {Object.keys(allData.teams).map((keys, index) => <DropdownItem key={index} onClick={() => setTeamValue(keys)}>{keys}</DropdownItem>)}
              </DropdownMenu>
            </Dropdown> */}
            <Headers>
              <span>Members: {totalUsers}</span>
              <span>Roles</span>
            </Headers>
            {teamData.filter((val) => {
              if (searchTerm === "") {
                return val
              } else if (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                return  val
              }
            }).map((users, key) => {
                return (
                  <TeamCard key={key}>
                    <Users>
                      <p>{users.active ? <ActivityImage src={online} alt='user-online' /> : <ActivityImage src={offline} alt='user-offline' />}</p>
                      {users.picture ? <ProfileImage src={users.picture} alt="user-image" /> : <ProfileImage src={defaultUserImage} alt="user-image" />} 
                      <UserDetails>
                        <p>{users.active ? <UserStatusMobile src={online} alt='user-online' /> : <UserStatusMobile src={offline} alt='user-offline' />}<b>{users.name}</b></p>
                        <p>{users.username}</p>
                      </UserDetails>
                    </Users>
                    <p><b>{users.department}</b></p>
                  </TeamCard>
                )
              }).sort()
            }
          </TeamContainer>
        </Tab>
        <Tab eventKey="second" title="Roadmap" disabled>
          <TeamTitle>Roadmap</TeamTitle>
          <Roadmap />
        </Tab>
        {/* <Tab eventKey="third" title="Third Title">
          
        </Tab> */}
        
      </Tabs>
      
    
  )
}