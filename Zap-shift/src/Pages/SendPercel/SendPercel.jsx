import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendPercel = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const serviceCenters = useLoaderData();
    const regionDuplicate = serviceCenters.map(c=>c.region);
    const regions = [...new Set(regionDuplicate)];
    const senderRegion = useWatch({control, name:"senderRegion"});
    const receiverRegion = useWatch({control, name:"receiverRegion"});
    console.log(regions);

    const districtByRegion = region =>{
        const regionDistricts = serviceCenters.filter(c=>c.region === region).map(c=>c.district);
        return regionDistricts;
    }
    const handleSendPercel = (data) => {
        console.log(data);
    }
    return (
        <div>
            <h1 className="text-5xl font-bold mt-8">Send Percel</h1>
            <form onSubmit={handleSubmit(handleSendPercel)} className="space-y-5 mt-12 p-4 text-black">
                {/*percel type*/}
                <div>
                    <label className="label mr-4">
                        <input type="radio" {...register("parcelType")}
                            value="document" className="radio" defaultChecked />
                        Document
                    </label>
                    <label className="label">
                        <input type="radio" {...register("parcelType")}
                            value="non-document" className="radio" />
                        Non-Document</label>
                </div>
                {/*Parcel details: name, weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" className="input w-full" placeholder="Parcel name" {...register("parcelName", { required: true })} />
                        {errors.parcelName && <p className="text-red-500">Parcel name is required</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight</label>
                        <input type="number" className="input w-full" placeholder="Parcel weight" {...register("parcelWeight", { required: true })} />
                        {errors.parcelWeight && <p className="text-red-500">Parcel weight is required</p>}
                    </fieldset>
                </div>

                {/*two column*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/*Sender info*/}
                    <div>
                        <h4 className="text-2xl font-bold mb-4">Sender Information</h4>
                        <fieldset className="fieldset">
                            <label className="label">Sender Name</label>
                            <input type="text" className="input w-full" placeholder="Sender name" {...register("senderName", { required: true })} />
                            {errors.senderName && <p className="text-red-500">Sender name is required</p>}

                            <label className="label">Sender Address</label>
                            <input type="text" className="input w-full" placeholder="Sender address" {...register("senderAddress", { required: true })} />
                            {errors.senderAddress && <p className="text-red-500">Sender address is required</p>}

                            <label className="label">Sender Phone Number</label>
                            <input type="text" className="input w-full" placeholder="Sender phone number" {...register("senderPhone", { required: true })} />
                            {errors.senderPhone && <p className="text-red-500">Sender phone number is required</p>}

                            {/*Sender Region*/}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender Region</legend>
                                <select {...register("senderRegion")} defaultValue="Pick a region" className="select w-full">
                                    <option disabled={true}>Pick a region</option>
                                    {
                                        regions.map((r,i)=><option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                                
                            </fieldset>

                            {/*Sender District*/}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender District</legend>
                                <select {...register("senderDistrict")} defaultValue="Pick a district" className="select w-full">
                                    <option disabled={true}>Pick a district</option>
                                    {
                                        districtByRegion(senderRegion).map((d,i)=><option key={i} value={d}>{d}</option>)
                                    }
                                </select>
                            </fieldset>
                                        

                            
                        </fieldset>
                    </div>

                    {/*Receiver info*/}
                    <div>
                        <h4 className="text-2xl font-bold mb-4">Receiver Information</h4>
                        <fieldset className="fieldset">
                            <label className="label">Receiver Name</label>
                            <input type="text" className="input w-full" placeholder="Receiver name" {...register("receiverName", { required: true })} />
                            {errors.receiverName && <p className="text-red-500">Receiver name is required</p>}

                            <label className="label">Receiver Address</label>
                            <input type="text" className="input w-full" placeholder="Receiver address" {...register("receiverAddress", { required: true })} />
                            {errors.receiverAddress && <p className="text-red-500">Receiver address is required</p>}

                            <label className="label">Receiver Phone Number</label>
                            <input type="text" className="input w-full" placeholder="Receiver phone number" {...register("receiverPhone", { required: true })} />
                            {errors.receiverPhone && <p className="text-red-500">Receiver phone number is required</p>}
                                    {/*Sender Region*/}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Receiver Region</legend>
                                <select {...register("receiverRegion")} defaultValue="Pick a region" className="select w-full">
                                    <option disabled={true}>Pick a region</option>
                                    {
                                        regions.map((r,i)=><option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                                
                            </fieldset>

                            {/*Receiver District*/}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Receiver District</legend>
                                <select {...register("receiverDistrict")} defaultValue="Pick a district" className="select w-full">
                                    <option disabled={true}>Pick a district</option>
                                    {
                                        districtByRegion(receiverRegion).map((d,i)=><option key={i} value={d}>{d}</option>)
                                    }
                                </select>
                            </fieldset>
                            


                        </fieldset>
                    </div>
                </div>
                <input type="submit" value="Send Percel" className="btn btn-primary text-black" />
            </form>

        </div>
    );
};

export default SendPercel;