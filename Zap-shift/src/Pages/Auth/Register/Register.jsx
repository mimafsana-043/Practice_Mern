import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { registerUser, updateUserProfile } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	console.log('in register',location);

	const handleRegistration = (data) => {
		console.log(data.photo[0]);
		registerUser(data.email, data.password)
			.then(result => {
				const user = result.user;
				console.log(user);
				//store image to imgbb and get the photo url
				const formData = new FormData();
				formData.append('image', data.photo[0]);
				const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_hosting_key}`
				axios.post(image_API_URL, formData)
				.then(res=>{
					console.log('after image upload',res.data.data.display_url);
					const userProfile ={
						displayName: data.name,
						photoURL: res.data.data.display_url
					}
					updateUserProfile(userProfile)
					.then(()=>{
						console.log('user profile updated');
						navigate(location.state || "/");
					})	
					.catch(error=>{
						console.error(error);
					})

				})
			})
			.catch(error => {
				console.error(error);
			});
	}
	return (
		<div className="w-full max-w-md rounded-4xl border border-white/60 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-8">
			<div className="mb-8 text-center">
				<p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Join now</p>
				<h3 className="mt-2 text-3xl font-bold text-slate-900">Create your account</h3>
				<p className="mt-3 text-sm leading-6 text-slate-600">Set up your Zap Shift account to start managing deliveries.</p>
			</div>
			<form className="space-y-5" onSubmit={handleSubmit(handleRegistration)} >
				<fieldset className="space-y-4">
					<div>
						<label className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
						<input type="text" {...register("name", { required: true })} className="input w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#CABE66] focus:ring-2 focus:ring-[#CABE66]/25" placeholder="Enter your name" />
						{errors.name?.type === "required" && <p className="mt-2 text-sm text-red-500">Name is required</p>}
					</div>
					{/* photo image field */}
					<div>
						<label className="mb-2 block text-sm font-semibold text-slate-700">Photo</label>
						<input type="file" {...register("photo", { required: true })} className="file-input w-full rounded-2xl border border-slate-200 bg-white/90  text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#CABE66] focus:ring-2 focus:ring-[#CABE66]/25" />
						{errors.photo?.type === "required" && <p className="mt-2 text-sm text-red-500">Photo is required</p>}
					</div>
					<div>
						<label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
						<input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="input w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#CABE66] focus:ring-2 focus:ring-[#CABE66]/25" placeholder="name@example.com" />
						{errors.email?.type === "required" && <p className="mt-2 text-sm text-red-500">Email is required</p>}
						{errors.email?.type === "pattern" && <p className="mt-2 text-sm text-red-500">Please enter a valid email address</p>}
					</div>
					<div>
						<label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
						<input type="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/ })} className="input w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#CABE66] focus:ring-2 focus:ring-[#CABE66]/25" placeholder="Create a password" />
						{errors.password?.type === "required" && <p className="mt-2 text-sm text-red-500">Password is required</p>}
						{errors.password?.type === "minLength" && <p className="mt-2 text-sm text-red-500">Password must be at least 6 characters</p>}
						{errors.password?.type === "pattern" && <p className="mt-2 text-sm text-red-500">Password must contain at least one uppercase letter, one lowercase letter, and one number</p>}
					</div>
					<div className="flex items-center justify-end text-sm">
						<a className="font-medium text-slate-600 transition hover:text-[#03373D]">Forgot password?</a>
					</div>
					<button className="btn w-full rounded-2xl border-0 bg-[#03373D] py-3 text-base font-semibold text-white shadow-lg shadow-[#03373D]/20 transition hover:bg-[#022c31]">Register</button>
				</fieldset>
			</form>
			<div className="mt-6">
				<SocialLogin></SocialLogin>
			</div>
			<p className="mt-6 text-center text-sm text-slate-600">
				Already have an account? <Link to="/login" className="font-semibold text-[#03373D] underline-offset-4 transition hover:underline">Login</Link>
			</p>
		</div>


	);
};

export default Register;
