function Student(props) {
    console.log(props.name)
    return(
        <div >
            <h1>HI {props.name}</h1>
        </div>
    )


}

export default Student;