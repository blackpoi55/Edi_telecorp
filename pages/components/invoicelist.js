import Layout from "../Layoutza/Layout"
import React,{useMemo,useState,useEffect,useRef} from 'react'
function table() {
    const [isClose,setisClose] = useState(true);
  return (
    <Layout>
        {isClose ? (<>
            <div className="content-center text-center justify-items-center text-4xl mt-5 text-blue-800 ">
        รายการรับของ
      </div>
      <div className="content-center text-center justify-items-center text-3xl mt-1 text-gray-600 ">
      
     Invoice list
      </div>

      <div className="ml-5  mt-10   mr-5 ">
        <div className="border-solid border-2 border-black rounded-lg  w-full ">
          <div className=" m-2 item-center justify-between">
            <div className="flex ">
              <div className="flex-grow">
                  
              <div className="mt-1">
    <label className="inline-flex items-center">
      <input type="radio" className="form-radio h-4 w-4 " name="accountType" value="personal" />
      <span className="ml-2 text-blue-800">Current data</span>
    </label>
  <input className="ml-3 ppearance-nonebg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date"></input>
    </div>
              </div>
              <div className="flex-grow">  <div className="mt-1">
    <label className="inline-flex items-center">
      <input type="radio" className="form-radio h-4 w-4 " name="accountType" value="personal" />
      <span className="ml-2 text-blue-800">from</span>
    </label>
  <input className="ml-3 ppearance-nonebg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date"></input>
  <label className="inline-flex items-center ml-2 text-blue-800">to </label>
  <input className="ml-3 ppearance-nonebg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date"></input>
    </div></div>
              <div className="flex-grow"> 
               <div className="mt-1">
               <label className="inline-flex items-center  text-blue-800">Status </label>
               <select className="form-select ml-2 ppearance-nonebg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
    <option>Active</option>
    <option>Inactive</option>
  </select>
  <label className="inline-flex items-center ml-2 text-blue-800">Place</label>
  <select className="form-select   ml-2 ppearance-nonebg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
    <option>No data</option>
    <option>No data</option>
  </select>
    </div></div>
              <div className="flex-grow-0">
                  <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Search</button></div>
             
            </div>
            
          </div>
        </div>
     
<div className="flex flex-col mt-10">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-base font-medium text-blue-800 uppercase tracking-wider ">เลขที่ใบสั่งซื้อ</th>
 <th scope="col" className="px-6 py-3 text-left text-base font-medium text-blue-800 uppercase tracking-wider">รหัสผู้จำหน่าย</th>
 <th scope="col" className="px-6 py-3 text-left text-base font-medium text-blue-800 uppercase tracking-wider">ผู้จำหน่าย</th>
 <th scope="col" className="px-6 py-3 text-left text-base font-medium text-blue-800 uppercase tracking-wider">เลขที่ใบส่งของ</th>
 <th scope="col" className="px-6 py-3 text-left text-base font-medium text-blue-800 uppercase tracking-wider">วันที่ใบส่งของ</th>
 <th scope="col" className="px-6 py-3 text-left text-base font-medium text-blue-800 uppercase tracking-wider">สถาที่ส่งมอบ</th>
 <th scope="col" className="px-6 py-3 text-left text-base font-medium text-blue-800 uppercase tracking-wider">สถานะ</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
               
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td> */}
               <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">PO 00001 </div>   </td>
 <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">00001 </div>   </td>
 <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">00000001 </div>   </td>
 <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">00000001</div>   </td>
 <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">13/03/63 </div>   </td>

 <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">อาคารสะอาด   </div>   </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button  onClick={()=> setisClose(false)} >
              <svg class="text-blue-800  w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            
            </button>  </td>
            </tr>

         
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

      </div>

    
        </>): 
        <>
 <div class="relative ">
  <div class="absolute mt-5 ml-10 left-0 top-0">
    <a onClick={()=>setisClose(true)}>
  <div class="rounded-full h-11 w-11 bg-indigo-800 flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>

</div>
</a>
   </div>
</div>
<div className="content-center text-center justify-items-center text-4xl mt-5 text-blue-800 ">
        ใบรับของ (IN)
      </div>

      <div class="grid grid-cols-2 gap-3">
  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">เลขที่ใบสั่งซื้อ <label className="ml-5">00001</label></div>

  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">เลขที่ใบส่งของ <label className="ml-5">00001</label></div>
  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">รหัสผู้จำหน่าย <label className="ml-5">00001</label></div>
  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">วันที่ใบส่งของ <label className="ml-5">12/12/12</label></div>
  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">ชื่อผู้จำหน่าย <label className="ml-5">สมศักดิ์</label></div>

  <div className="content-center text-center justify-items-center text-base mt-5 font-bold  ">สถาที่ส่งมอบ <label className="ml-5">ตึกสะอาด</label></div>

</div>


    
<div className="flex flex-col mt-10">
  <div className=" ">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-gray-200 sm:rounded-lg">
        <table className="min-w-full w-full ">
          <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3 text-center border-b border-r text-base font-medium  text-blue-800 uppercase tracking-wider">รหัส GPU</th>
<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider">รหัส UNSPSC</th>
<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider">รหัส TMT</th>
<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider">Bar code</th>
<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider w-1/2">ชื่อยา / เวชภัณท์</th>
<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider">รหัสผลิต</th>

<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider">วันที่ผลิต</th>
<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b  text-blue-800 uppercase tracking-wider">วันที่หมดอายุ</th>

<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider">จำนวน</th>

<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider">หน่วย</th>

<th scope="col" className="px-6 py-3 text-center text-base font-medium border-b border-r text-blue-800 uppercase tracking-wider">ราคาต่อหน่วย</th>

        
            </tr>
          </thead>
          <tbody className="bg-white ">
            <tr>
           
               <td className="px-6 py-4  border-r whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                <td className="px-6 py-4  border-r whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                <td className="px-6 py-4  border-r whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                <td className="px-6 py-4  border-r whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                <td className="px-6 py-4  border-r whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">ถุงมือ </div>   </td>
                <td className="px-6 py-4  border-r whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">00001 </div>   </td>
                <td className="px-6 py-4   whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                <td className="px-6 py-4   whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
                <td className="px-6 py-4   whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">1000</div>   </td>
                <td className="px-6 py-4   whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">2 </div>   </td>
                <td className="px-6 py-4   whitespace-nowrap">
                <div className="text-center text-sm text-gray-900">2 </div>   </td>

              

          
            </tr>
        
            <tr>
           
           <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">ถุงมือ </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">1000</div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">2 </div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">2 </div>   </td>

          

      
        </tr>
    
        <tr>
           
           <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">ถุงมือ </div>   </td>
            <td className="px-6 py-4  border-r whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">00001 </div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">10/10/64 </div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">1000</div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">2 </div>   </td>
            <td className="px-6 py-4   whitespace-nowrap">
            <div className="text-center text-sm text-gray-900">2 </div>   </td>

          

      
        </tr>
    
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col mb-10">
<div class="grid grid-cols-2 gap-3 ml-5 mt-5 mr-10">
<div className="content-center text-left justify-items-center text-base mt-5 font-bold  ">หมายเหตุ -
  </div>
  <div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ราคารวม (ไม่รวม VAT) <input  id="VAT_AMOUNT" value="3000" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  "/>
  </div>
  </div>
  <div class="grid grid-cols-1 gap-3 mt-5 mr-10">
<div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ส่วนลด - เปอร์เซ็นต์ <input  id="VAT_AMOUNT" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  "/>
  </div>
<div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ส่วนลด - บาท <input  id="VAT_AMOUNT" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  "/>
  </div>
<div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">VAT <input  id="VAT_AMOUNT" value="30" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  "/>
  </div>
<div className="content-center text-right justify-items-center text-base mt-5 font-bold  ">ราคารวม <input  id="VAT_AMOUNT" value="3030" autoComplete="false" className="ml-4 bg-white shadow-md rounded   text-gray-900  "/>
  </div>
</div> </div></>
}
    
    </Layout>
  );
}

export default table;
