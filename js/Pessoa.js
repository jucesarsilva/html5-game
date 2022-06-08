/**
 * ...
 * @author Julio Cesar Silva
 * @date 24/05/2012
 */
function Pessoa()
{
	this.nome ="fulano sicrano";
	var peso  = 80;
	teste = "valor";
	
	function mudaNome(update)
	{
		nome = update;
		return nome; 
	}
	
	function mudaPeso()
	{
		peso = 50;
		teste = "privado";
	}
	
	this.verificar = function ()
	{	
		teste = "publico";	
		this.nome = "kkkkkkkkkkkkkkkkkkkk";
		peso = 1000;
	}	
			
	this.verificar();
	alert(teste);
	
	
	//this.nome = mudaNome("blablablablaba");
	
	
	
    mudaPeso();
	
	//alert(this.nome);
	alert(teste);
}
