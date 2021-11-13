import React from 'react'
import styles from './Tabs.module.css'
// import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { NavLink } from "react-router-dom"
import Wall from './Wall'
interface TabsButtonProps {
  link: string
  title: string
}

const TabsButton = (props: TabsButtonProps) => {

  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        [
          styles.tabsButton,
          isActive ? styles.active : null
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {props.title}
    </NavLink >
  )
}


function Tabs() {

  return (
    <div className={styles.tabsNav}>
      <TabsButton
        title="События"
        link="/home"
      />
      <TabsButton
        title="Портфолио"
        link="/portfolio"
      />
      <TabsButton
        title="Стоимость"
        link="/price"
      />
      <TabsButton
        title="Контакты"
        link="/contacts"
      />
    </div>
  )
}




// function ScrollableTabsButtonPrevent() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={styles.tabsNav}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons={false}
//       >
//         <Tab label="События" to="/home" />
//         <Tab label="Портфолио" to="/portfolio" />
//         <Tab label="Стоимость" to="/price" />
//         <Tab label="Контакты" to="/contacts" />
//       </Tabs>
//     </div>
//   );
// }


export default Tabs
