async function getData() {
    let x = await fetch('')
    let data = await x.json()
    console.log(data)
   

  
}
async function main() {

  let data = await getData();
  console.log(data);
}

main()