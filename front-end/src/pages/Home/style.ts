import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 66rem;

  h2 {
    font-size: 1.80rem;
    line-height: 1.75rem;
    text-align: center;
  }

  p {
    color: #000;
  }

  input {
    height: 2rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
    margin-bottom: 1rem;
  }

  & > button:last-child {
    margin-top: 0;
  }
`

export const ButtonContainer = styled.div`
  width: 16%;
  margin: 0 auto;
`

export const PageBody = styled.div`
  min-height: calc(100vh - 300px);
  min-width: calc(100vh - 200px);
  margin: 0 40px;
  padding: 15px 2rem;
  box-sizing: border-box;

  svg {
    cursor: pointer;
  }
`

export const ResponsiveTable = styled.div`
  width: 100%;
  display: table;
  color: #fff;
  font-size: 16px;
`

export const TableHeader = styled.div`
  display: table-header-group;
  color: #9b9b9b;
`

export const TableHeaderCell = styled.div`
  display: table-cell;
  padding: 10px 10px 10px 0px;
  text-align: justify;
  border-bottom: 1px solid #3f3e3e;
`

export const TableBody = styled.div`
  display: table-row-group;

  & > div:hover {
    background-color: #efedff;
    transition: ease-in-out 0.2s;
  }
`

export const TableBodyCell = styled.div`
  display: table-cell;
  height: 60px;
  vertical-align: middle;

  svg {
    color: #9b9b9b;
    transition: ease-in-out 0.2s;
  }

  svg:hover {
    color: #000;
    transition: ease-in-out 0.2s;
  }
`

export const TableBodyRow = styled.div`
  display: table-row;

  & > div:last-child {
    display: flex;
    align-items: center;
  }

  & > div:last-child svg:first-child {
    padding-right: 0.3rem;
  }

  & > div:last-child svg {
    padding-right: 0.5rem;
  }

  &:first-child > ${TableBodyCell} {
    padding: 15px 10px 5px 0px;
  }

  &:last-child > ${TableBodyCell} {
    border-bottom: 0;
  }
`
