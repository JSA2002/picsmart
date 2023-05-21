import React from 'react'
/*import { Configuration, OpenAIApi } from "openai";
import Spinner from './Spinner.gif'

function Generate() {
  //sizes
  const options = ['256x256', '512x512', '1024x1024'];
  const onOptionChangeHandler = (event) => {
    setSize(event.target.value);
  }

  const [spin, setSpin] = useState(false);
  const [userPrompt, setUserPrompt] = useState("")
  const [imageUrl1, setImageUrl1] = useState("")
  const [imageUrl2, setImageUrl2] = useState("")
  const [imageUrl3, setImageUrl3] = useState("")
  const [imageUrl4, setImageUrl4] = useState("")
  const [size, setSize] = useState("256x256")
  const [head,setHead] = useState(false);
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    setSpin(true);
    const imageParameters = {
      prompt: userPrompt,
      n: 4,
      size: size,
    }
    const response = await openai.createImage(imageParameters);
    const urlData1 = response.data.data[0].url
    const urlData2 = response.data.data[1].url
    const urlData3 = response.data.data[2].url
    const urlData4 = response.data.data[3].url
    console.log(urlData1);
    setImageUrl1(urlData1);
    setImageUrl2(urlData2);
    setImageUrl3(urlData3);
    setImageUrl4(urlData4);
    setTimeout(() => {
      setSpin(false);
    }, 5000)
  }
    
  return (
    <div className='generate'>
      <div className='geneInput'>
        <input className='gInput' placeholder='Type here : Eg. A sunset on Sydney Opera House'
          onChange={(e) => setUserPrompt(e.target.value)} />
        <select onChange={onOptionChangeHandler} className='gSize'>
          <option>Select size</option>
          {options.map((option, index) => {
            return <option key={index} >
              {option}
            </option>
          })}
        </select>
        <button onClick={() => error()} className="butGenerate">Generate</button>
      </div>
      <div>
        {spin && <img src={Spinner} alt='Spinner' className='spinner'></img>}
      </div>
      <div className='centreGenerate'>
        {
          imageUrl1
            ? <img src={imageUrl1} className="image" alt="ai thing" />
            : <></>
        }
        {
          imageUrl2
            ? <img src={imageUrl2} className="image" alt="ai thing" />
            : <></>
        }
        {
          imageUrl3
            ? <img src={imageUrl3} className="image" alt="ai thing" />
            : <></>
        }
        {
          imageUrl4
            ? <img src={imageUrl4} className="image" alt="ai thing" />
            : <></>
        }
      </div>
      </div>
      )
    }*/
function Generate() {
  return (
    <h1 className='search' id='heading' style={{"top":"0","backgroundColor":"black","height":"100vh"}}>Server Unavailable</h1>
      )
}


export default Generate;