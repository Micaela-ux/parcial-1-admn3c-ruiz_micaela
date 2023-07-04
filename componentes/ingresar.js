Vue.component('ingresar-menu', {
	
	data:
		function(){
			return {
				titulo:"Ingresar un menú",
				
				form_data:{
					dia: "",
					horario: "",
					menu: "",
					postre: "",
				},

				menus:[],
			}

	},

	template:`
		<div class="container">
			<header class="bg-p1 text-center p-5">
				<h1 class="col-md-6 m-auto h2">{{titulo}}</h1>
			</header>
			<div class="p-5">

				<form @submit.prevent>
					<div class="row">

						<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3">
							<label for="dia" class="form-label">Dia:</label>
								<select v-model="form_data.dia" class="form-select">
									<option selected>Elija un día</option>
									<option value="lunes">Lunes</option>
									<option value="martes">Martes</option>
									<option value="miercoles">Miercoles</option>
									<option value="jueves">Jueves</option>
									<option value="viernes">Viernes</option>
									<option value="sabado">Sabado</option>
									<option value="domingo">Domingo</option>
								</select>
						</div>

						<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3">
							<label for="horario" class="form-label">Horario:</label>
							<input v-model.number="form_data.horario" id="horario" name="horario" type="number" class="form-control">
						</div>

						<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3">
							<label for="menu" class="form-label">Menú:</label>
							<input v-model="form_data.menu" id="menu" name="menu" type="text" class="form-control">
						</div>


						<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3">
							<label for="postre" class="form-label">Postre:</label>
							<input v-model="form_data.postre" id="postre" name="postre" type="text" class="form-control">
						</div>

					</div>

					<div class="d-grid gap-2">
						<button type="button" @click="agregar(form_data)" value="Agregar" class="btn bg-p1 mt-5 p-3 text-uppercase">Agregar</button>
					</div>

				</form>
			</div>

		</div>
	`,

	methods:{
		agregar:function(form_data){
			if(!localStorage.dato){
				menus=[];
			}else{
				menus=JSON.parse(localStorage.getItem("dato"));
			}

			menus.push(form_data);
			localStorage.setItem("dato",JSON.stringify(menus));
		
			this.$router.push('/mi-menu');

		}

	},
	destroyed: function(){
		console.log("se destruyo la instancia");
	
	}


})
