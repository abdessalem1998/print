import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { ComponentToPrint } from './ComponentToPrint';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      name1: "",
      name2: "",
      name3: "",
      date1: "",
      date2: "",
      date3: "",
      in1: "",
      in2: "",
      in3: "",
      id1: "",
      id2: "",
      idDate1: "",
      idDate2: "",
      idIn1: "",
      idIn2: "",
      father3: "",
      mother3: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // handle form submission logic here
    },
  });

  console.log(formik.setValues)
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="App row p-5 m-0" dir="rtl">
      <div className='bg-white col-6 mx-auto border rounded-5'>
        <>
          <p className='text-center fw-bolder'>تصريح بعدم العمل</p>
          <p className='fw-bolder'>بناءا على شهادة الشهود الممصن اسفله</p>
          <div className='py-2'>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>
              <span>01- السيد(ة) : </span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="name1"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.name1}
                onChange={formik.handleChange} />
              <span>المولود بتاريخ</span>
              <Form.Control
                type="date"
                noCalendarIcon={true}
                placeholder="...................."
                name="date1"
                style={{ height: '25px', width: '250px', border: 'none' }}
                value={formik.values.date1}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>

              <span>ب</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="in1"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.in1}
                onChange={formik.handleChange} />
              <span>صاحب ب.ت.و وتحت رقم</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="id1"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.id1}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex'>

              <span>الصادرة بتاريخ: </span>
              <Form.Control
                type="date"
                placeholder="...................."
                name="idDate1"
                style={{ height: '25px', width: '120px', border: 'none' }}
                value={formik.values.idDate1}
                onChange={formik.handleChange} />
              <span>من طرف دائرة/بلدية</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="idIn1"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.idIn1}
                onChange={formik.handleChange} />
            </div>
          </div>
          <div className='py-2'>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>
              <span>02- السيد(ة) : </span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="name2"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.name2}
                onChange={formik.handleChange} />
              <span>المولود بتاريخ</span>
              <Form.Control
                type="date"
                noCalendarIcon={true}
                placeholder="...................."
                name="date2"
                style={{ height: '25px', width: '250px', border: 'none' }}
                value={formik.values.date2}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>

              <span>ب</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="in2"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.in2}
                onChange={formik.handleChange} />
              <span>صاحب ب.ت.و وتحت رقم</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="id2"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.id2}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex'>

              <span>الصادرة بتاريخ: </span>
              <Form.Control
                type="date"
                placeholder="...................."
                name="idDate2"
                style={{ height: '25px', width: '120px', border: 'none' }}
                value={formik.values.idDate2}
                onChange={formik.handleChange} />
              <span>من طرف دائرة/بلدية</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="idIn2"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.idIn2}
                onChange={formik.handleChange} />
            </div>
          </div>
          <div className='py-2'>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>
              <p>نشهد على ان السيد(ة): </p>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="name3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.name3}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>
              <p>المولود بتاريخ: </p>
              <Form.Control
                type="date"
                noCalendarIcon={true}
                placeholder="...................."
                name="date3"
                style={{ height: '25px', width: '200px', border: 'none' }}
                value={formik.values.date3}
                onChange={formik.handleChange} />
              <span>ب</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="in3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.in3}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex'>
              <span>ابن(ة)</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="father3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.father3}
                onChange={formik.handleChange} />
              <span>ابن(ة)</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="mother3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.mother3}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex'>
              <span>الساكن(ة)</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="in3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.in3}
                onChange={formik.handleChange} />
            </div>
          </div>
          <div className='py-2'>
            <p className='p-0 m-0 fw-bolder'>لا يمارس اي وظيفة او دو مرتب شهري</p>
            <p className='p-0 m-0 fw-bolder'>امضنا على هدا التصريح لاستعماله في حدود ما يسمح به القانون.</p>
            <p className='my-5'>امضاء الشاهد الاول</p>
            <p className='my-5'>امضاء الشاهد الثاني</p>
          </div>
        </>
      </div>
      <div className='d-flex justify-content-between'>
        <Button variant="success" size="lg" onClick={handlePrint}>طباعة</Button>
        <Button variant="danger" size="lg" onClick={() => {
          formik.setValues({
            name1: "",
            name2: "",
            name3: "",
            date1: "",
            date2: "",
            date3: "",
            in1: "",
            in2: "",
            in3: "",
            in4: "",
            id1: "",
            id2: "",
            idDate1: "",
            idDate2: "",
            idIn1: "",
            idIn2: "",
            father3: "",
            mother3: "",
          })
        }}>حدف</Button>
      </div>
      <ComponentToPrint
        ref={componentRef}
        t={<>
          <p className='text-center fw-bolder'>تصريح بعدم العمل</p>
          <p className='fw-bolder'>بناءا على شهادة الشهود الممصن اسفله</p>
          <div className='py-2'>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>
              <span>01- السيد(ة) : </span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="name1"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.name1}
                onChange={formik.handleChange} />
              <span>المولود بتاريخ</span>
              <Form.Control
                type="date"
                noCalendarIcon={true}
                placeholder="...................."
                name="date1"
                style={{ height: '25px', width: '250px', border: 'none' }}
                value={formik.values.date1}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>

              <span>ب</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="in1"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.in1}
                onChange={formik.handleChange} />
              <span>صاحب ب.ت.و وتحت رقم</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="id1"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.id1}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex'>

              <span>الصادرة بتاريخ: </span>
              <Form.Control
                type="date"
                placeholder="...................."
                name="idDate1"
                style={{ height: '25px', width: '120px', border: 'none' }}
                value={formik.values.idDate1}
                onChange={formik.handleChange} />
              <span>من طرف دائرة/بلدية</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="idIn1"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.idIn1}
                onChange={formik.handleChange} />
            </div>
          </div>
          <div className='py-2'>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>
              <span>02- السيد(ة) : </span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="name2"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.name2}
                onChange={formik.handleChange} />
              <span>المولود بتاريخ</span>
              <Form.Control
                type="date"
                noCalendarIcon={true}
                placeholder="...................."
                name="date2"
                style={{ height: '25px', width: '250px', border: 'none' }}
                value={formik.values.date2}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>

              <span>ب</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="in2"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.in2}
                onChange={formik.handleChange} />
              <span>صاحب ب.ت.و وتحت رقم</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="id2"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.id2}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex'>

              <span>الصادرة بتاريخ: </span>
              <Form.Control
                type="date"
                placeholder="...................."
                name="idDate2"
                style={{ height: '25px', width: '120px', border: 'none' }}
                value={formik.values.idDate2}
                onChange={formik.handleChange} />
              <span>من طرف دائرة/بلدية</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="idIn2"
                style={{ height: '25px', width: '150px', border: 'none' }}
                value={formik.values.idIn2}
                onChange={formik.handleChange} />
            </div>
          </div>
          <div className='py-2'>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>
              <p>نشهد على ان السيد(ة): </p>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="name3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.name3}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex' style={{ whiteSpace: 'nowrap' }}>
              <p>المولود بتاريخ: </p>
              <Form.Control
                type="date"
                noCalendarIcon={true}
                placeholder="...................."
                name="date3"
                style={{ height: '25px', width: '200px', border: 'none' }}
                value={formik.values.date3}
                onChange={formik.handleChange} />
              <span>ب</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="in3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.in3}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex'>
              <span>ابن(ة)</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="father3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.father3}
                onChange={formik.handleChange} />
              <span>ابن(ة)</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="mother3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.mother3}
                onChange={formik.handleChange} />
            </div>
            <div className='d-flex'>
              <span>الساكن(ة)</span>
              <Form.Control
                type="text"
                border={false}
                placeholder="...................."
                name="in3"
                style={{ height: '25px', border: 'none' }}
                value={formik.values.in3}
                onChange={formik.handleChange} />
            </div>
          </div>
          <div className='py-2'>
            <p className='p-0 m-0 fw-bolder'>لا يمارس اي وظيفة او دو مرتب شهري</p>
            <p className='p-0 m-0 fw-bolder'>امضنا على هدا التصريح لاستعماله في حدود ما يسمح به القانون.</p>
            <p className='my-5'>امضاء الشاهد الاول</p>
            <p className='my-5'>امضاء الشاهد الثاني</p>
          </div>
        </>} />
    </div>
  );
}

export default App;
