function Card({children}){
    return(
        <div style = {{
            border: "1px Solid #ccc", 
            borderRadius: "8px", 
            padding: "16px", 
            width: "250px",
            }}>
        {children}
        </div>
    );
}
export default Card;