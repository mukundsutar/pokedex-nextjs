import React from "react";

export default function Profile() {
	return (
		<>
			<div className="hero bg-base-200 min-h-fit p-10 ">
				<div className="hero-content flex-col lg:flex-row space-x-20">
					<img
						src="https://picsum.photos/400"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
