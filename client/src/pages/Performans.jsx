import React, { useState } from "react";
import "../App.scss";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "../components/Select";
import SelectOne from "../components/SelectOne";
import Questions from "../components/Makaleler";
import Makaleler from "../components/Makaleler";
import LisansUstuTezler from "../components/LisansUstuTezler";
import Kitap from "../components/Kitap";
import Patent from "../components/Patent";
import Atiflar from "../components/Atiflar";
import LisansUstuDanismanlik from "../components/LisansUstuDanismanlik"
import BilimselArastirmaProjesi from "../components/BilimselArastirmaProjesi"
import BilimselToplantiFaaliyeti from "../components/BilimselToplantiFaaliyeti"
import EgitimOgretimFaaliyeti from "../components/EgitimOgretimFaaliyeti"

function Performans() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    const newcv = {
      name: values.name,
      email: values.email,
      questions: values.questions

    }

    try {
      const res = await axios.post("/survey", newcv);

      console.log(res);
      setSubmitted(true);
    } catch (e) {
      console.log(e);
    }


    setLoading(false);
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          department: "",
          _section: 0,
          questions: {
            section_1: {
              questions_1: "",
              questions_2: "",
              questions_3: "",
            },
            section_2: {
              questions_1: "",
              questions_2: "",
              questions_3: "",
              questions_4: "",
            },
            section_3: {
              questions_1: "",
              questions_2: "",
              questions_3: "",
              questions_4: "",
            },
            section_4: {
              questions_1: "",
              questions_2: "",
            },
            section_5: {
              questions_1: "",
              questions_2: "",
              questions_3: "",
            },
            section_6: {
              questions_1: "",
              questions_2: "",
            },
            section_7: {
              questions_1: "",
              questions_2: "",
              questions_3: "",
              questions_4: "",
            },
            section_8: {
              questions_1: "",
              questions_2: "",
            },
            section_9: {
              questions_1: "",
              questions_2: ""
            }

          },
          _submitted: false,
          _forms: [],
        }}
        onSubmit={(values, { setFieldValue }) => {
          handleSubmit(values);
          console.log(values);
        }}
      >
        {({
          values,
          handleChange,
          errors,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <>
            {values._submitted ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                  width: "100vw"
                }}
              >
                <span
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  Teşekkürler, anketiniz başarıyla gönderildi.
                </span>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "70vw",
                  padding: "1rem",
                  borderRadius: "1rem",
                  backgroundColor: "gray",
                }}
              >
                {
                  values._section == 0 && <SelectOne
                    id="department"
                    name="department"
                    placeholder="Hangi Doçentliğe Başvuracaksınız?"
                    value={values.department}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="Atmosfer Bilimleri ve Meteoroloji Mühendisliği ">{"Atmosfer Bilimleri ve Meteoroloji Mühendisliği "}</option>
                    <option value="Bilgisayar Mühendisliği">{"Bilgisayar  Mühendisliği"}</option>
                    <option value="Biyomedikal Mühendisliği ">{"Biyomedikal Mühendisliği "}</option>
                    <option value="Biyomühendislik">{"Biyomühendislik"}</option>
                    <option value="Çevre Bilimleri ve Mühendisliği">{"Çevre Bilimleri ve Mühendisliği"}</option>
                    <option value="Deniz ve Gemi Mühendisliği ">{"Deniz ve Gemi Mühendisliği "}</option>
                    <option value="Elektrik-Elektronik Mühendisliği">{"Elektrik-Elektronik Mühendisliği"}</option>
                    <option value="Elektronik-Haberleşme Mühendisliği">{"Elektronik-Haberleşme Mühendisliği"}</option>
                    <option value="Endüstri Mühendisliği ">{"Endüstri Mühendisliği "}</option>
                    <option value="Enerji Sistemleri Mühendisliği">{"Enerji Sistemleri Mühendisliği"}</option>
                    <option value="Gıda Bilimleri ve Mühendisliği">{"Gıda Bilimleri ve Mühendisliği"}</option>
                    <option value="Harita Mühendisliği ">{"Harita Mühendisliği"}</option>
                    <option value="Kimya Mühendisliği">{"Kimya Mühendisliği"}</option>
                    <option value="Maden Mühendisliği ">{"Maden Mühendisliği"}</option>
                    <option value="Makine Mühendisliği">{"Makine Mühendisliği"}</option>
                    <option value="Malzeme ve Metalurji Mühendisliği">{"Malzeme ve Metalurji Mühendisliği"}</option>
                    <option value="Nükleer Mühendisliği ">{"Nükleer Mühendisliği "}</option>
                    <option value="Otomotiv Mühendisliği">{"Otomotiv Mühendisliği"}</option>
                    <option value="Petrol Mühendisliği">{"Petrol Mühendisliği"}</option>
                    <option value="Tekstil Bilimleri ve Mühendisliği ">{"Tekstil Bilimleri ve Mühendisliği "}</option>
                    <option value="Uçak-Havacılık-Uzay Mühendisliği">{"Uçak-Havacılık-Uzay Mühendisliği"}</option>
                    <option value="Yer Bilimleri ve Mühendisliği">{"Yer Bilimleri ve Mühendisliği"}</option>

                  </SelectOne>
                }
                {
                  values._section == 0 && <>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "start",
                        width: "100%",

                      }}
                    >
                      <span
                        style={{
                          color: "#242526",
                          background: "#fff",
                          borderRadius: ".5rem",
                          marginTop: "1rem",

                          padding: ".25rem",
                        }}
                        htmlFor={"name"}
                      >Ad Soyad</span>
                      <input
                        name="name"
                        value={values.name}

                        id="name"
                        onChange={handleChange}
                        style={{
                          color: "#242526",
                          background: "#fff",
                          borderRadius: ".5rem",
                          padding: ".25rem",
                        }}
                        type="text" />

                      <span
                        style={{
                          color: "#242526",
                          background: "#fff",
                          marginTop: "1rem",
                          borderRadius: ".5rem",
                          padding: ".25rem",
                        }}
                        htmlFor={"email"}
                      >Email</span>
                      <input
                        onChange={handleChange}

                        style={{
                          color: "#242526",

                          background: "#fff",
                          borderRadius: ".5rem",
                          padding: ".25rem",
                        }}
                        value={values.email}
                        name="email"
                        id="email"
                        type="text" />
                    </div>

                  </>
                }

                {
                  values._section == 1 &&
                  <Makaleler></Makaleler>
                }
                {
                  values._section == 2 &&

                  <LisansUstuTezler></LisansUstuTezler>
                }
                {
                  values._section == 3 &&

                  <Kitap />
                }
                {
                  values._section == 4 &&

                  <Patent />
                }
                {
                  values._section == 5 &&

                  <Atiflar />
                }
                {
                  values._section == 6 &&

                  <LisansUstuDanismanlik />
                }
                {
                  values._section == 7 &&

                  <BilimselArastirmaProjesi />
                }
                {
                  values._section == 8 &&

                  <BilimselToplantiFaaliyeti />
                }
                {
                  values._section == 9 &&

                  <EgitimOgretimFaaliyeti />
                }

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%"
                  }}
                >
                  <button


                    onClick={
                      () => {
                        setFieldValue("_section", values._section - 1)
                      }
                    }
                    style={{
                      margin: "4rem 0",
                      borderRadius: "1rem",
                      padding: "1rem",
                      outline: "none",
                      border: "0",
                      display: values._section == 0 && "none",
                      cursor: "pointer"
                    }}
                  >Geri</button>
                  <button
                    onClick={
                      () => {
                        setFieldValue("_section", values._section + 1)
                      }
                    }
                    style={{
                      margin: "4rem 0",
                      borderRadius: "1rem",
                      display: values._section == 9 && "none",
                      padding: "1rem",
                      outline: "none",
                      border: "0",
                      cursor: "pointer"
                    }}
                  >İleri</button>
                  <button
                    onClick={() => {
                      handleSubmit()
                      setFieldValue("_submitted", true)
                    }}
                    style={{
                      margin: "4rem 0",
                      borderRadius: "1rem",
                      padding: "1rem",
                      display: values._section == 9 ? "block" : "none",
                      outline: "none",
                      border: "0",
                      cursor: "pointer"
                    }}
                  >Formu Gönder</button>

                </div>



              </div>
            )}
          </>
        )}
      </Formik>
    </div >
  );
}
export default Performans;
