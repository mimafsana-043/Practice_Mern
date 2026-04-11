import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { signInUser } = useAuth();
	const handleLogin = (data) => {
		console.log(data);
		signInUser(data.email, data.password)
			.then(result => {
				console.log(result.user);
			})
			.catch(error => {
				console.error(error);
			});
	};
	return (
		<div className="w-full max-w-md rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-8">
			<div className="mb-8 text-center">
				<p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Welcome back</p>
				<h3 className="mt-2 text-3xl font-bold text-slate-900">Login to Zap Shift</h3>
				<p className="mt-3 text-sm leading-6 text-slate-600">Use your email and password to continue to your dashboard.</p>
			</div>
			<form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
				<fieldset className="space-y-4">
					<div>
						<label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
						<input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="input w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#CABE66] focus:ring-2 focus:ring-[#CABE66]/25" placeholder="name@example.com" />
						{errors.email?.type === "required" && <p className="mt-2 text-sm text-red-500">Email is required</p>}
						{errors.email?.type === "pattern" && <p className="mt-2 text-sm text-red-500">Please enter a valid email address</p>}
					</div>
					<div>
						<label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
						<input type="password" {...register("password", { required: true, minLength: 6 })} className="input w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#CABE66] focus:ring-2 focus:ring-[#CABE66]/25" placeholder="Enter your password" />
						{errors.password?.type === "required" && <p className="mt-2 text-sm text-red-500">Password is required</p>}
						{errors.password?.type === "minLength" && <p className="mt-2 text-sm text-red-500">Password must be at least 6 characters</p>}
					</div>
					<div className="flex items-center justify-end text-sm">
						<a className="font-medium text-slate-600 transition hover:text-[#03373D]">Forgot password?</a>
					</div>
					<button className="btn w-full rounded-2xl border-0 bg-[#03373D] py-3 text-base font-semibold text-white shadow-lg shadow-[#03373D]/20 transition hover:bg-[#022c31]">Login</button>
				</fieldset>
			</form>
			<div className="mt-6">
				<SocialLogin></SocialLogin>
			</div>
			<p className="mt-6 text-center text-sm text-slate-600">
				New to Zap Shift? <Link to="/register" className="font-semibold text-[#03373D] underline-offset-4 transition hover:underline">Register</Link>
			</p>
		</div>

	);
};

export default Login;
