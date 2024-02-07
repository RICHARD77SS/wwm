
import React, { useEffect, useState } from "react";
import { storage, txtDB } from "../../Utils/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";

function StoreImageTextFirebase() {
  const [txt, setTxt] = useState<any>('')
  const [img, setImg] = useState<any>('')
  const [data, setData] = useState<any>([])


  const handleUpload = (e: any) => {
    console.log(e.target.files[0])
    const imgs = ref(storage, `Imgs/we`)
    uploadBytes(imgs, e.target.files[0]).then(data => {
      console.log(data, "imgs")
      getDownloadURL(data.ref).then(val => {
        setImg(val)
      })
    })
  }

  const handleClick = async () => {
    const valRef = collection(txtDB, 'txtData')
    await addDoc(valRef, { txtVal: txt, imgUrl: img })
    alert("Data added successfully")
  }

  const getData = async () => {
    const valRef = collection(txtDB, 'txtData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
    setData(allData)
    console.log(dataDb)
  }

  useEffect(() => {
    getData()
  })
  console.log(data)

  return (
    <div>
      <input title='a' onChange={(e) => setTxt(e.target.value)} /><br />
      <input title='a' type="file" onChange={(e) => handleUpload(e)} /><br /><br />
      <button onClick={handleClick}>Add</button>

      {
        data.map((value: any) => <div>
          <h1>{value.txtVal}</h1>
          <img alt='a' src={value.imgUrl} height='200px' width='200px' />
        </div>)
      }
    </div>
  )
}

export default StoreImageTextFirebase;