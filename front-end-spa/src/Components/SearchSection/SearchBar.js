import React from "react"
import SearchTeam from "./SearchTeam"
import SearchKeyword from "./SearchKeyword"
import styles from "./SearchBar.module.css"
import SearchBtn from "./SearchBtn"

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <div>
        <SearchTeam></SearchTeam>
      </div>
      <div>
        <SearchKeyword></SearchKeyword>
      </div>
      <div>
        <SearchBtn></SearchBtn>
      </div>
    </div>
  )
}

export default SearchBar
