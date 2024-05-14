import pink_flask from './assets/pink-flask.jpg';

export default function shopItem() {
    var name = "hydroflask";
    var cost = 44;
    var colors = ["pink", "green", "blue"];
    var image = pink_flask;
    var stats = ["800mL / 16oz", "bacteria resistant"];
    // img
    // name
    // cost
    // color
    // stats

    useEffect(() => {}, [] )
    return(
        <div className=''>
            <div>
                <p>{name}</p>
                <p>{colors.length} Colors</p>
            </div>
            <div>
                <p>{cost}</p>
                
            </div>


        </div>
    );
}