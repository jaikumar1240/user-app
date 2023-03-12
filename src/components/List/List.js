
const List = (props) => {
    if (props?.users?.length === 0) {
        return <div>No User Added</div>
    }
    const deleteUser = (event) => {
        console.log(event);
        // props.deleteUserIndex(event.target?.__reactFiber$y5rkaynib7d?.index)
    }
    let content = props.users.map((res) => {
        return <div onClick={deleteUser} key={res.key}>{`${res.name} ( ${res.age} )`}</div>
    })
    return (
        <>
            {content}
        </>
    )
}
export default List;