export default ()=>{
    const view=`
        <h1>HOME!</h1>
        <p>Ya en casa</p>
    `;
    const divElement=document.createElement('div');
    divElement.innerHTML=view;
    return divElement;
};