import React, { useState } from 'react'

const AddProduct = () => {
    const [noOfImages, setNoOfImages] = useState(new Array(1).fill(1));
  return (
    <div>
        <form action="">
            <input type="text" name={"title"} placeholder='enter title ....'/>
            <input type="text" name={"description"} placeholder='Enter product description...' />
            <select name="" id="" onChange={(event) => {
                console.log(event.target);
                setNoOfImages(new Array(parseInt(event.target.value)).fill(1));
            }}>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
            </select>
            <label htmlFor="">Add Images</label>
            {
                [...Array(noOfImages)].map((_, index) => (
                    <input type="file" accept={"image"} />
                ))
            }
        </form>
    </div>
  )
}

export default AddProduct