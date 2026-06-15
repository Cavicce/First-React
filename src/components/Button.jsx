function Button({label, color = 'pink',onClick}){
    return(
        <button
            onClick = {onClick}
            style = {{
                backgroundColor: color,
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius:"6px",
                cursor: "pointer",
            }}
        >{label}
        </button>
    );
}
export default Button;