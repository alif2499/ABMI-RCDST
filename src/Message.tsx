
function Message(){
    const name = 'Ridoy';
    if (name)
        return <h1>
            Hello {name}
        </h1>;
    return <h1>
        Hello All
    </h1>;
}

export default Message;