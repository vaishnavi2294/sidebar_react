import  React ,{useState} from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fontWeight } from '@mui/system';
import ListItem from '@mui/material/ListItem';
// import checkboxesData from './checkboxesData.js';

export default function Checkboxes() {


  const [checked, setChecked] = useState([true,false]);

  var checkboxesData = [
        
    {
            "id": 1,
            "name": "Gym",
            "advertisers": [
                {
                    "city_id": 2,
                    "city": {
                        "id": 2,
                        "name": "Mumbai"
                    },
                    "area": [
                        {
                            "area": "Challaghatta"
                        }
                    ]
                },
                {
                    "city_id": 3,
                    "city": {
                        "id": 3,
                        "name": "Delhi"
                    },
                    "area": [
                        {
                            "area": "Goregaon West"
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "Corporate Park",
            "advertisers": [
                {
                    "city_id": 1,
                    "city": {
                        "id": 1,
                        "name": "Pune"
                    },
                    "area": [
                        {
                            "area": "Balewadi"
                        },
                        {
                            "area": "Kalyani Nagar"
                        }
                    ]
                },
                {
                    "city_id": 2,
                    "city": {
                        "id": 2,
                        "name": "Mumbai"
                    },
                    "area": [
                        {
                            "area": "Shivaji Nagar"
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "Co-Working",
            "advertisers": [
                {
                    "city_id": 1,
                    "city": {
                        "id": 1,
                        "name": "Pune"
                    },
                    "area": [
                        {
                            "area": "Baner"
                        }
                    ]
                },
                {
                    "city_id": 2,
                    "city": {
                        "id": 2,
                        "name": "Mumbai"
                    },
                    "area": [
                        {
                            "area": "Koramangala"
                        }
                    ]
                },
                {
                    "city_id": 3,
                    "city": {
                        "id": 3,
                        "name": "Delhi"
                    },
                    "area": [
                        {
                            "area": "Andheri East"
                        }
                    ]
                },
                {
                    "city_id": 4,
                    "city": {
                        "id": 4,
                        "name": "Bengaluru"
                    },
                    "area": [
                        {
                            "area": "Connaught Place"
                        },
                        {
                            "area": "Saket"
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "name": "Colleges",
            "advertisers": [
                {
                    "city_id": 1,
                    "city": {
                        "id": 1,
                        "name": "Pune"
                    },
                    "area": [
                        {
                            "area": "Baner"
                        }
                    ]
                },
                {
                    "city_id": 2,
                    "city": {
                        "id": 2,
                        "name": "Mumbai"
                    },
                    "area": [
                        {
                            "area": "Ashok Nagar"
                        }
                    ]
                }
            ]
        },
        {
            "id": 5,
            "name": "Restaurants",
            "advertisers": [
                {
                    "city_id": 2,
                    "city": {
                        "id": 2,
                        "name": "Mumbai"
                    },
                    "area": [
                        {
                            "area": "Sanjay Nagar"
                        }
                    ]
                },
                {
                    "city_id": 3,
                    "city": {
                        "id": 3,
                        "name": "Delhi"
                    },
                    "area": [
                        {
                            "area": "Andheri West"
                        }
                    ]
                }
            ]
        },
        {
            "id": 6,
            "name": "Offices",
            "advertisers": [
                {
                    "city_id": 3,
                    "city": {
                        "id": 3,
                        "name": "Delhi"
                    },
                    "area": [
                        {
                            "area": "Andheri East"
                        }
                    ]
                }
            ]
        }
    ]
  const handleChange1 = (event) => {
    setChecked([event.target.checked , event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[0]]);
  };

  const handleChange3 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  }
  
  const display = 

    checkboxesData.map((data)=>
     
       <Box>
        <FormControlLabel label= {data.name} control={<Checkbox checked={checked[0]} onChange = {handleChange2}/>}/>
       </Box>
      
    
    )
   
  return (

    <Box style={{ paddingLeft:"30%", zIndex:"-1"}}>
        <FormControlLabel xs ={{zIndex:"-1"}}
        label="Advertisers"
        control={
          <Checkbox
            checked={checked[0]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />,
       {display}
 </Box>
  )

}