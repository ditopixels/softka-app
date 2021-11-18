const d=document

export default function File(){
    const fs = d.getElementById('file')
    const json = d.getElementById('json')

    fs.addEventListener('change',(e)=>{
        const files = e.target.files,
            f=files[0]
        const reader = new FileReader()
        reader.onload = function(e){
            const data = new Uint8Array(e.target.result),
                workbook = XLSX.read(data,{type:'array'}),
                first_sheet_name = workbook.SheetNames[0],
                worksheet = workbook.Sheets[first_sheet_name],
                jsonData =XLSX.utils.sheet_to_json(worksheet,{raw:true}) 
            
                console.log(jsonData);
        }
        reader.readAsArrayBuffer(f)
    },false)
}