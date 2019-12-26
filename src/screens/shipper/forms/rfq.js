import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row, } from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { createNewRFQ } from "../../../helpers/api";
import Link from "react-router-dom/es/Link";
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css"
export default () => {

    const [form, setForm] = useState({
        'origin': '',
        'destination': '',
        'scheduled_date': '',
        'truck_type': '',
        'truck_name': '',
        'total_trucks': 0,
        'offered_price': 0,
        'weight': 0,
        'id_comments': '',


        // Actions
        //
        states: [
            { id: 1, label: "All India" },
            { id: 2, label: "Andhra Pradesh" },
            { id: 3, label: "Assam" },
            { id: 4, label: "Bihar" },
            { id: 5, label: "Chandigarh" },
            { id: 6, label: "Chhattisgarh" },
            { id: 7, label: "Delhi" },
            { id: 8, label: "Goa" },
            { id: 9, label: "Gujarat" },
            { id: 10, label: "Haryana" },
            { id: 11, label: "Himachal Pradesh" },
            { id: 12, label: "Maharashtra" },
            { id: 13, label: "Hyderabad" },
            { id: 14, label: "Jammu Kashmir" },
            { id: 15, label: "Jharkhand" },
            { id: 16, label: "Karnataka" },
            { id: 17, label: "Kerala" },
            { id: 18, label: "Madhya Pradesh" },
            { id: 19, label: "Odisha" },
            { id: 20, label: "Punjab" },
            { id: 21, label: "Rajasthan" },
            { id: 22, label: "Tamil Nadu" },
            { id: 23, label: "Telangana" },
            { id: 24, label: "Tripura" },
            { id: 25, label: "Uttar Pradesh" },
            { id: 26, label: "Uttarakhand" },
            { id: 27, label: "West Bengal" },

        ],
        selectedItems: []



    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value,

        });
    };
    const handleChange = (selectedItems) => {
        console.log(selectedItems);

        setForm({
            ...form,
            selectedItems,
        });


    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { states, ...nf } = form;
            await createNewRFQ(nf);
        } catch (e) {

        }
    };

    return (
        <Card>
            <CardHeader>
                <strong>Post New RFQ</strong>
            </CardHeader>
            <CardBody>
                <Form method={'post'} onSubmit={handleSubmit}>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="origin">Origin</Label>
                                <Input type="text" onChange={(v) => setForm({ ...form, 'origin': v.description })} value={form.origin} name="origin" id="origin" placeholder="ex: Delhi" required />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="destination">Destination</Label>
                                <Input type="text" onChange={(v) => setForm({ ...form, 'destination': v.description })} value={form.destination} name="destination" id="destination" placeholder="ex: Mumbai" required />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="scheduled_date">Departure Date and Time</Label>
                                <Input type="datetime-local" name="scheduled_date" id="scheduled_date"
                                    value={form.scheduled_date}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="truck_type" id="truck_type" onChange={handleInputChange}>
                                    <option selected disabled>---- Select ----</option>
                                    <option value="1">Open</option>
                                    <option value="2">Container</option>
                                    <option value="3">Trailer</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_name">Trucks Name</Label>
                                <Input type="select" name="truck_name" id="truck_name" value={form.truck_name}
                                    onChange={handleInputChange}>


                                    <option value="">-------Open------</option>

                                    <option value="121">10 TYRE 14 Ton</option>

                                    <option value="93">10 TYRE 14 Ton</option>

                                    <option value="9">10 TYRE 14 Ton</option>

                                    <option value="37">10 TYRE 14 Ton</option>

                                    <option value="65">10 TYRE 14 Ton</option>

                                    <option value="149">10 TYRE 14 Ton</option>

                                    <option value="36">10 TYRE 15 Ton</option>

                                    <option value="92">10 TYRE 15 Ton</option>

                                    <option value="64">10 TYRE 15 Ton</option>

                                    <option value="120">10 TYRE 15 Ton</option>

                                    <option value="8">10 TYRE 15 Ton</option>

                                    <option value="148">10 TYRE 15 Ton</option>

                                    <option value="119">10 TYRE 19 Ton</option>

                                    <option value="7">10 TYRE 19 Ton</option>

                                    <option value="91">10 TYRE 19 Ton</option>

                                    <option value="35">10 TYRE 19 Ton</option>

                                    <option value="63">10 TYRE 19 Ton</option>

                                    <option value="147">10 TYRE 19 Ton</option>

                                    <option value="118">12 TYRE 20 Ton</option>

                                    <option value="6">12 TYRE 20 Ton</option>

                                    <option value="62">12 TYRE 20 Ton</option>

                                    <option value="34">12 TYRE 20 Ton</option>

                                    <option value="146">12 TYRE 20 Ton</option>

                                    <option value="90">12 TYRE 20 Ton</option>

                                    <option value="61">12 TYRE 21 Ton</option>

                                    <option value="89">12 TYRE 21 Ton</option>

                                    <option value="33">12 TYRE 21 Ton</option>

                                    <option value="5">12 TYRE 21 Ton</option>

                                    <option value="145">12 TYRE 21 Ton</option>

                                    <option value="117">12 TYRE 21 Ton</option>

                                    <option value="4">12 TYRE 24 Ton</option>

                                    <option value="60">12 TYRE 24 Ton</option>

                                    <option value="116">12 TYRE 24 Ton</option>

                                    <option value="88">12 TYRE 24 Ton</option>

                                    <option value="144">12 TYRE 24 Ton</option>

                                    <option value="32">12 TYRE 24 Ton</option>

                                    <option value="155">13 Feet 3.5 Ton</option>

                                    <option value="99">13 Feet 3.5 Ton</option>

                                    <option value="43">13 Feet 3.5 Ton</option>

                                    <option value="71">13 Feet 3.5 Ton</option>

                                    <option value="15">13 Feet 3.5 Ton</option>

                                    <option value="127">13 Feet 3.5 Ton</option>

                                    <option value="98">14 Feet 4 Ton</option>

                                    <option value="14">14 Feet 4 Ton</option>

                                    <option value="42">14 Feet 4 Ton</option>

                                    <option value="154">14 Feet 4 Ton</option>

                                    <option value="126">14 Feet 4 Ton</option>

                                    <option value="70">14 Feet 4 Ton</option>

                                    <option value="59">14 TYRE 24 Ton</option>

                                    <option value="87">14 TYRE 24 Ton</option>

                                    <option value="31">14 TYRE 24 Ton</option>

                                    <option value="3">14 TYRE 24 Ton</option>

                                    <option value="115">14 TYRE 24 Ton</option>

                                    <option value="143">14 TYRE 24 Ton</option>

                                    <option value="58">14 TYRE 25 Ton</option>

                                    <option value="114">14 TYRE 25 Ton</option>

                                    <option value="142">14 TYRE 25 Ton</option>

                                    <option value="86">14 TYRE 25 Ton</option>

                                    <option value="2">14 TYRE 25 Ton</option>

                                    <option value="30">14 TYRE 25 Ton</option>

                                    <option value="1">14 TYRE 29 Ton</option>

                                    <option value="85">14 TYRE 29 Ton</option>

                                    <option value="113">14 TYRE 29 Ton</option>

                                    <option value="29">14 TYRE 29 Ton</option>

                                    <option value="57">14 TYRE 29 Ton</option>

                                    <option value="141">14 TYRE 29 Ton</option>

                                    <option value="125">17 Feet 6 Ton</option>

                                    <option value="97">17 Feet 6 Ton</option>

                                    <option value="13">17 Feet 6 Ton</option>

                                    <option value="153">17 Feet 6 Ton</option>

                                    <option value="41">17 Feet 6 Ton</option>

                                    <option value="69">17 Feet 6 Ton</option>

                                    <option value="12">18 Feet 8 Ton</option>

                                    <option value="152">18 Feet 8 Ton</option>

                                    <option value="96">18 Feet 8 Ton</option>

                                    <option value="68">18 Feet 8 Ton</option>

                                    <option value="124">18 Feet 8 Ton</option>

                                    <option value="40">18 Feet 8 Ton</option>

                                    <option value="39">19 Feet 8 Ton</option>

                                    <option value="11">19 Feet 8 Ton</option>

                                    <option value="151">19 Feet 8 Ton</option>

                                    <option value="67">19 Feet 8 Ton</option>

                                    <option value="95">19 Feet 8 Ton</option>

                                    <option value="123">19 Feet 8 Ton</option>

                                    <option value="150">22 Feet 9.7 Ton</option>

                                    <option value="94">22 Feet 9.7 Ton</option>

                                    <option value="66">22 Feet 9.7 Ton</option>

                                    <option value="122">22 Feet 9.7 Ton</option>

                                    <option value="38">22 Feet 9.7 Ton</option>

                                    <option value="10">22 Feet 9.7 Ton</option>

                                    <option value="102">Tempo 407 1.5 Ton</option>

                                    <option value="74">Tempo 407 1.5 Ton</option>

                                    <option value="18">Tempo 407 1.5 Ton</option>

                                    <option value="46">Tempo 407 1.5 Ton</option>

                                    <option value="130">Tempo 407 1.5 Ton</option>

                                    <option value="158">Tempo 407 1.5 Ton</option>

                                    <option value="16">Tempo 407 2.5 Ton</option>

                                    <option value="128">Tempo 407 2.5 Ton</option>

                                    <option value="100">Tempo 407 2.5 Ton</option>

                                    <option value="156">Tempo 407 2.5 Ton</option>

                                    <option value="72">Tempo 407 2.5 Ton</option>

                                    <option value="44">Tempo 407 2.5 Ton</option>

                                    <option value="17">Tempo 407 2 Ton</option>

                                    <option value="101">Tempo 407 2 Ton</option>

                                    <option value="45">Tempo 407 2 Ton</option>

                                    <option value="73">Tempo 407 2 Ton</option>

                                    <option value="157">Tempo 407 2 Ton</option>

                                    <option value="129">Tempo 407 2 Ton</option>

                                    <option value=" ">---------------------Container---------------------</option>

                                    <option value="168">20 ft sxl 6 Ton</option>

                                    <option value="112">20 ft sxl 6 Ton</option>

                                    <option value="28">20 ft sxl 6 Ton</option>

                                    <option value="140">20 ft sxl 6 Ton</option>

                                    <option value="56">20 ft sxl 6 Ton</option>

                                    <option value="84">20 ft sxl 6 Ton</option>

                                    <option value="83">20 ft sxl 7 Ton</option>

                                    <option value="167">20 ft sxl 7 Ton</option>

                                    <option value="55">20 ft sxl 7 Ton</option>

                                    <option value="111">20 ft sxl 7 Ton</option>

                                    <option value="27">20 ft sxl 7 Ton</option>

                                    <option value="139">20 ft sxl 7 Ton</option>

                                    <option value="78">24 ft mxl 14.5 Ton</option>

                                    <option value="50">24 ft mxl 14.5 Ton</option>

                                    <option value="22">24 ft mxl 14.5 Ton</option>

                                    <option value="106">24 ft mxl 14.5 Ton</option>

                                    <option value="134">24 ft mxl 14.5 Ton</option>

                                    <option value="162">24 ft mxl 14.5 Ton</option>

                                    <option value="79">24 ft mxl 14 Ton</option>

                                    <option value="51">24 ft mxl 14 Ton</option>

                                    <option value="135">24 ft mxl 14 Ton</option>

                                    <option value="163">24 ft mxl 14 Ton</option>

                                    <option value="107">24 ft mxl 14 Ton</option>

                                    <option value="23">24 ft mxl 14 Ton</option>

                                    <option value="161">24 ft mxl 15 Ton</option>

                                    <option value="21">24 ft mxl 15 Ton</option>

                                    <option value="49">24 ft mxl 15 Ton</option>

                                    <option value="133">24 ft mxl 15 Ton</option>

                                    <option value="77">24 ft mxl 15 Ton</option>

                                    <option value="105">24 ft mxl 15 Ton</option>

                                    <option value="25">24 ft sxl 6.5 Ton</option>

                                    <option value="165">24 ft sxl 6.5 Ton</option>

                                    <option value="53">24 ft sxl 6.5 Ton</option>

                                    <option value="137">24 ft sxl 6.5 Ton</option>

                                    <option value="81">24 ft sxl 6.5 Ton</option>

                                    <option value="109">24 ft sxl 6.5 Ton</option>

                                    <option value="82">24 ft sxl 6 Ton</option>

                                    <option value="26">24 ft sxl 6 Ton</option>

                                    <option value="110">24 ft sxl 6 Ton</option>

                                    <option value="166">24 ft sxl 6 Ton</option>

                                    <option value="54">24 ft sxl 6 Ton</option>

                                    <option value="138">24 ft sxl 6 Ton</option>

                                    <option value="80">24 ft sxl 7 Ton</option>

                                    <option value="164">24 ft sxl 7 Ton</option>

                                    <option value="52">24 ft sxl 7 Ton</option>

                                    <option value="136">24 ft sxl 7 Ton</option>

                                    <option value="24">24 ft sxl 7 Ton</option>

                                    <option value="108">24 ft sxl 7 Ton</option>

                                    <option value="103">32 ft sxl 6.5 Ton</option>

                                    <option value="159">32 ft sxl 6.5 Ton</option>

                                    <option value="47">32 ft sxl 6.5 Ton</option>

                                    <option value="19">32 ft sxl 6.5 Ton</option>

                                    <option value="75">32 ft sxl 6.5 Ton</option>

                                    <option value="131">32 ft sxl 6.5 Ton</option>

                                    <option value="76">32 ft sxl 6 Ton</option>

                                    <option value="132">32 ft sxl 6 Ton</option>

                                    <option value="104">32 ft sxl 6 Ton</option>

                                    <option value="48">32 ft sxl 6 Ton</option>

                                    <option value="20">32 ft sxl 6 Ton</option>

                                    <option value=" ">---------------------Trailer---------------------</option>
                                    <option value="160">High bed</option>

                                    <option value="160">Low bed</option>

                                    <option value="160">Semi bed</option>


                                </Input>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="weight">Weight</Label>
                                <Input type="number" name="weight" id="weight" value={form.weight}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="weight"><h5>Invite Bidders From:</h5></Label>

                                <MultiSelect
                                    items={form.states}
                                    selectedItems={form.selectedItems}
                                    onChange={handleChange}


                                />


                            </FormGroup>
                        </Col>

                    </Row>


                    <br /><br /><br />
                    <Button color={"primary"} size={"lg"}>Create</Button> &nbsp;&nbsp;&nbsp;

                    <Link to={'/freight/request-for-quotation'}>
                        <Button color={"link"} size={"lg"}>Cancel</Button>
                    </Link>

                </Form>
            </CardBody>
        </Card>



    )

}
