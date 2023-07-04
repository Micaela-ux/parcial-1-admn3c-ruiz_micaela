Vue.component("ver-menu", {
	data:function(){
			return {
				titulo: "Mi menú semanal",
				local:[],
				sin_datos: "",
			}
	},
	template:`
		<div class="container">
			<header class="bg-p1 text-center p-5">
				<h1 class="col-md-6 m-auto h2">{{titulo}}</h1>
			</header>

			<div class="row d-flex align-items-center p-5">
				<table class="table">
					<thead>
						<tr class="color-rosa-oscuro">
							<th scope="col">Día</th>
							<th scope="col">Horario</th>
							<th scope="col">Menú</th>
							<th scope="col">Postre</th>
							<th scope="col" width="5%">Acciones</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="item in local">
							<td> {{item.dia}} </td>
							<td> {{item.horario}} </td>
							<td> {{item.menu}} </td>
							<td> {{item.postre}} </td>
							<td class="text-end">
								<a @click="eliminar(item)" type="button" class="btn btn-danger mb-1"> <i class="bi bi-trash"></i></a>
							</td>
    
						</tr>
					</tbody>
					
				</table>
				<p>{{sin_datos}}</p>
        	</div>

		</div>
	`,

	mounted:function(){
		console.log("se monto");
		this.ver_local();
	},

	destroyed: function(){
		console.log("se destruyo la instancia");
	},

	methods:{
		ver_local:function(){
			
			if(localStorage.dato){
				this.local=JSON.parse(localStorage.getItem("dato"));
						
			}else{
			
				this.sin_datos = "No hay datos que mostrar";
			}
				console.log( this.$route);

		},

		eliminar(x) {
			this.local.splice(x, 1);
			this.saveDato();
		},

		saveDato() {
		const parsed = JSON.stringify(this.local);
		localStorage.setItem('dato', parsed);
		}

	}

})