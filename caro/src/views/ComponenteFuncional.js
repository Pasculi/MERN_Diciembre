const ComponenteFuncional = (props) => {

    const { edad, suma, text, setText } = props;

    return (
        <div>
            <h1>Soy un componente funcional</h1>
            <h1>{edad}</h1>

            <button onClick={() => suma(edad + 1)}>Sumar edad</button><br /><br />
            <form>
                <label>Texto Random</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </form>
        </div>
    )
};

export default ComponenteFuncional;
