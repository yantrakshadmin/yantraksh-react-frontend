import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row,} from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {allAvailableTrucks, createNewRFQ} from "../../../helpers/api";


export default () => {

    const [form, setForm] = useState({
        'name*': '',
        'truck_name': '',
        'origin': '',
        'destination': '',
        'total_trucks': '',
        'truck_number': '',
        'scheduled_date': '',
        'offered_price': '',

    });

    const [trucksForm, setTrucksForm] = useState({
        trucks: [],
        selectedTruck: null,

    });


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    };


    // const [trucks, setData] = useState([]);

    useEffect(() => {
        const loadTrucks = async () => {
            const trucks = await allAvailableTrucks();
            setTrucksForm(trucks)
        };

        allAvailableTrucks();
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createNewRFQ(form);
            alert('done')
        } catch (e) {
            alert(JSON.stringify(e))
        }
    };


    return (
        <Card>
            <CardHeader>
                <strong>Post Truck</strong>
            </CardHeader>
            <CardBody>
                <Form method={'post'} onSubmit={handleSubmit}>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="origin">Origin</Label>
                                {/*<Input type="text" name="origin" id="origin" placeholder="ex: Delhi"/>*/}
                                <GooglePlacesAutocomplete
                                    onSelect={(value) => setForm({...form, 'origin': value.description})}
                                    initialValue={form.origin}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="destination">Destination</Label>
                                <GooglePlacesAutocomplete
                                    onSelect={(value) => setForm({...form, 'destination': value.description})}
                                    initialValue={form.destination}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="scheduled_date">Departure Date and Time</Label>
                                <Input type="datetime-local" name="scheduled_date" id="scheduled_date"
                                       valid={form.scheduled_date}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_name">Truck Name</Label>


                                <Input type="select" name="truck_name" id="truck_name" onChange={handleInputChange}>
                                    <option disabled="">---- Select Truck Type ---</option>
                                    <optgroup label="Open Trucks">
                                        <option value="1">14 TYRE 29</option>
                                        <option value="2">14 TYRE 25</option>
                                        <option value="3">14 TYRE 24</option>
                                        <option value="4">12 TYRE 24</option>
                                        <option value="5">12 TYRE 21</option>
                                        <option value="6">12 TYRE 20</option>
                                        <option value="7">10 TYRE 19</option>
                                        <option value="8">10 TYRE 15</option>
                                        <option value="9">10 TYRE 14</option>
                                        <option value="10">22 Feet 9.7</option>
                                        <option value="11">19 Feet 8</option>
                                        <option value="12">18 Feet 8</option>
                                        <option value="13">17 Feet 6</option>
                                        <option value="14">14 Feet 4</option>
                                        <option value="15">13 Feet 3.5</option>
                                        <option value="16">Tempo 407 2.5</option>
                                        <option value="17">Tempo 407 2</option>
                                        <option value="18">Tempo 407 1.5</option>
                                        <option value="28">14 TYRE 29</option>
                                        <option value="29">14 TYRE 25</option>
                                        <option value="30">14 TYRE 24</option>
                                        <option value="31">12 TYRE 24</option>
                                        <option value="32">12 TYRE 21</option>
                                        <option value="33">12 TYRE 20</option>
                                        <option value="34">10 TYRE 19</option>
                                        <option value="35">10 TYRE 15</option>
                                        <option value="36">10 TYRE 14</option>
                                        <option value="37">22 Feet 9.7</option>
                                        <option value="38">19 Feet 8</option>
                                        <option value="39">18 Feet 8</option>
                                        <option value="40">17 Feet 6</option>
                                        <option value="41">14 Feet 4</option>
                                        <option value="42">13 Feet 3.5</option>
                                        <option value="43">Tempo 407 2.5</option>
                                        <option value="44">Tempo 407 2</option>
                                        <option value="45">Tempo 407 1.5</option>
                                        <option value="55">14 TYRE 29</option>
                                        <option value="56">14 TYRE 25</option>
                                        <option value="57">14 TYRE 24</option>
                                        <option value="58">12 TYRE 24</option>
                                        <option value="59">12 TYRE 21</option>
                                        <option value="60">12 TYRE 20</option>
                                        <option value="61">10 TYRE 19</option>
                                        <option value="62">10 TYRE 15</option>
                                        <option value="63">10 TYRE 14</option>
                                        <option value="64">22 Feet 9.7</option>
                                        <option value="65">19 Feet 8</option>
                                        <option value="66">18 Feet 8</option>
                                        <option value="67">17 Feet 6</option>
                                        <option value="68">14 Feet 4</option>
                                        <option value="69">13 Feet 3.5</option>
                                        <option value="70">Tempo 407 2.5</option>
                                        <option value="71">Tempo 407 2</option>
                                        <option value="72">Tempo 407 1.5</option>
                                        <option value="82">14 TYRE 29</option>
                                        <option value="83">14 TYRE 25</option>
                                        <option value="84">14 TYRE 24</option>
                                        <option value="85">12 TYRE 24</option>
                                        <option value="86">12 TYRE 21</option>
                                        <option value="87">12 TYRE 20</option>
                                        <option value="88">10 TYRE 19</option>
                                        <option value="89">10 TYRE 15</option>
                                        <option value="90">10 TYRE 14</option>
                                        <option value="91">22 Feet 9.7</option>
                                        <option value="92">19 Feet 8</option>
                                        <option value="93">18 Feet 8</option>
                                        <option value="94">17 Feet 6</option>
                                        <option value="95">14 Feet 4</option>
                                        <option value="96">13 Feet 3.5</option>
                                        <option value="97">Tempo 407 2.5</option>
                                        <option value="98">Tempo 407 2</option>
                                        <option value="99">Tempo 407 1.5</option>
                                        <option value="109">14 TYRE 29</option>
                                        <option value="110">14 TYRE 25</option>
                                        <option value="111">14 TYRE 24</option>
                                        <option value="112">12 TYRE 24</option>
                                        <option value="113">12 TYRE 21</option>
                                        <option value="114">12 TYRE 20</option>
                                        <option value="115">10 TYRE 19</option>
                                        <option value="116">10 TYRE 15</option>
                                        <option value="117">10 TYRE 14</option>
                                        <option value="118">22 Feet 9.7</option>
                                        <option value="119">19 Feet 8</option>
                                        <option value="120">18 Feet 8</option>
                                        <option value="121">17 Feet 6</option>
                                        <option value="122">14 Feet 4</option>
                                        <option value="123">13 Feet 3.5</option>
                                        <option value="124">Tempo 407 2.5</option>
                                        <option value="125">Tempo 407 2</option>
                                        <option value="126">Tempo 407 1.5</option>
                                        <option value="136">14 TYRE 29</option>
                                        <option value="137">14 TYRE 25</option>
                                        <option value="138">14 TYRE 24</option>
                                        <option value="139">12 TYRE 24</option>
                                        <option value="140">12 TYRE 21</option>
                                        <option value="141">12 TYRE 20</option>
                                        <option value="142">10 TYRE 19</option>
                                        <option value="143">10 TYRE 15</option>
                                        <option value="144">10 TYRE 14</option>
                                        <option value="145">22 Feet 9.7</option>
                                        <option value="146">19 Feet 8</option>
                                        <option value="147">18 Feet 8</option>
                                        <option value="148">17 Feet 6</option>
                                        <option value="149">14 Feet 4</option>
                                        <option value="150">13 Feet 3.5</option>
                                        <option value="151">Tempo 407 2.5</option>
                                        <option value="152">Tempo 407 2</option>
                                        <option value="153">Tempo 407 1.5</option>
                                    </optgroup>

                                    <optgroup label="Container Trucks">
                                        <option value="19">32 ft sxl 6500</option>
                                        <option value="20">32 ft sxl 6000</option>
                                        <option value="21">24 ft mxl 15000</option>
                                        <option value="22">24 ft mxl 14500</option>
                                        <option value="23">24 ft mxl 14000</option>
                                        <option value="24">24 ft sxl 7000</option>
                                        <option value="25">24 ft sxl 6500</option>
                                        <option value="26">24 ft sxl 6000</option>
                                        <option value="27">20 ft sxl 7000</option>
                                        <option value="46">32 ft sxl 6500</option>
                                        <option value="47">32 ft sxl 6000</option>
                                        <option value="48">24 ft mxl 15000</option>
                                        <option value="49">24 ft mxl 14500</option>
                                        <option value="50">24 ft mxl 14000</option>
                                        <option value="51">24 ft sxl 7000</option>
                                        <option value="52">24 ft sxl 6500</option>
                                        <option value="53">24 ft sxl 6000</option>
                                        <option value="54">20 ft sxl 7000</option>
                                        <option value="73">32 ft sxl 6500</option>
                                        <option value="74">32 ft sxl 6000</option>
                                        <option value="75">24 ft mxl 15000</option>
                                        <option value="76">24 ft mxl 14500</option>
                                        <option value="77">24 ft mxl 14000</option>
                                        <option value="78">24 ft sxl 7000</option>
                                        <option value="79">24 ft sxl 6500</option>
                                        <option value="80">24 ft sxl 6000</option>
                                        <option value="81">20 ft sxl 7000</option>
                                        <option value="100">32 ft sxl 6500</option>
                                        <option value="101">32 ft sxl 6000</option>
                                        <option value="102">24 ft mxl 15000</option>
                                        <option value="103">24 ft mxl 14500</option>
                                        <option value="104">24 ft mxl 14000</option>
                                        <option value="105">24 ft sxl 7000</option>
                                        <option value="106">24 ft sxl 6500</option>
                                        <option value="107">24 ft sxl 6000</option>
                                        <option value="108">20 ft sxl 7000</option>
                                        <option value="127">32 ft sxl 6500</option>
                                        <option value="128">32 ft sxl 6000</option>
                                        <option value="129">24 ft mxl 15000</option>
                                        <option value="130">24 ft mxl 14500</option>
                                        <option value="131">24 ft mxl 14000</option>
                                        <option value="132">24 ft sxl 7000</option>
                                        <option value="133">24 ft sxl 6500</option>
                                        <option value="134">24 ft sxl 6000</option>
                                        <option value="135">20 ft sxl 7000</option>
                                        <option value="154">32 ft sxl 6500</option>
                                        <option value="155">32 ft sxl 6000</option>
                                        <option value="156">24 ft mxl 15000</option>
                                        <option value="157">24 ft mxl 14500</option>
                                        <option value="158">24 ft mxl 14000</option>
                                        <option value="159">24 ft sxl 7000</option>
                                        <option value="160">24 ft sxl 6500</option>
                                        <option value="161">24 ft sxl 6000</option>
                                        <option value="162">20 ft sxl 7000</option>
                                    </optgroup>
                                </Input>


                            </FormGroup>


                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.total_trucks}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Truck Number</Label>
                                <Input type="text" name="truck_number" id="truck_number" value={form.truck_number}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.offered_price}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <br/><br/><br/>
                    <Button color={"primary"} size={"lg"}>Create</Button> &nbsp;&nbsp;&nbsp;
                    <Button color={"link"} size={"lg"}>Cancel</Button>
                </Form>
            </CardBody>
        </Card>
    )
}
