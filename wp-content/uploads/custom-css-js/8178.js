<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

jQuery(document).ready(function( $ ){
    
	const elementGoPasilloEntrada = jQuery('#pasilloEntrada'); 
	const elementGoEntrada = jQuery('#entrada'); 
	const elementGoSala = jQuery('#sala'); 
	const elementGoBalconSala = jQuery('#balconSala'); 
	const elementGoCocina = jQuery('#cocina');
  	const elementGoBalconCocina = jQuery('#balconcocina');
	const elementGoCuartoServicio = jQuery('#cuartoServicio'); 
	const elementGoArmario = jQuery('#armario');  
	const elementGoPasilloPrincipal = jQuery('#pasilloPrincipal'); 
	const elementGoBanoServicio = jQuery('#banoServicio'); 
	const elementGoHabitacionOne = jQuery('#habitacionOne'); 
	const elementGoHabitacionOneBano = jQuery('#habitacionOneBano'); 
	const elementGoHabitacionOneBalcon = jQuery('#habitacionOneBalcon'); 
	const elementGoHabitacionTwo = jQuery('#habitacionTwo'); 
	const elementGoHabitacionTwoArmario = jQuery('#habitacionTwoArmario'); 
	const elementGoHabitacionTwoBano = jQuery('#habitacionTwoBano'); 
	const elementGoHabitacionTwoBalcon = jQuery('#habitacionTwoBalcon'); 
    const elementGoHabitacionThree = jQuery('#habitacionThree'); 
	const elementGoArmarioHabitacionThree = jQuery('#estudio'); 
	const elementGoHabitacionThreeBano = jQuery('#habitacionThreeBano'); 
	const elementGoHabitacionThreeBalcon = jQuery('#habitacionThreeBalcon'); 
    const elementText = jQuery('#textMap');


    
    const itemEntrada = jQuery('.info-box-entrada'); 
    const itemSala = jQuery('.info-box-sala'); 
    const itemCocinaComedor = jQuery('.info-box-cocina-comedor'); 
    const itemBanoSocial = jQuery('.info-box-bano-social'); 
    const itemHabitacionPrincipal = jQuery('.info-box-habitacion-principal'); 


     
    const urlMarker = "/wp-content/uploads/2021/10/icon-map-view-blanco.png"  
    const urlActiveMarker = "/wp-content/uploads/2021/10/icon-ubicacion-actual-color.png"
    const urlLocation = "https://backend-etex.creategicalatina.com/api/register-location";
    const urlWall = "https://backend-etex.creategicalatina.com/api/register-wall";
    const urlModel = "https://backend-etex.creategicalatina.com/api/register-model";

    let markerActive = false;
    let idCurrentMarker = '';


     
    const dataMarkers = [  // revisar la referencia del muro por defecto
        { nameMarker: "Ingresar", idMarker: "2F488BA48C", nameScene: "Entrada", idScene: "AB9E2B7BF7", wall: "", typeModel: ""  },
        { nameMarker: "M22", idMarker: "05EC7020D2", nameScene: "Entrada", idScene: "AB9E2B7BF7", wall: "M22", typeModel: "Good 100 Duc - Esc"  },
        { nameMarker: "M22 - 2", idMarker: "BA8C27C277", nameScene: "Entrada", idScene: "AB9E2B7BF7", wall: "M22", typeModel: "Good 100 Duc - Esc"  },
        { nameMarker: "M21", idMarker: "887628CBB5", nameScene: "Entrada", idScene: "AB9E2B7BF7", wall: "M21", typeModel: "Good 008"  },
        { nameMarker: "M21 - 2", idMarker: "28AF0BDD50", nameScene: "Entrada", idScene: "AB9E2B7BF7", wall: "M21", typeModel: "Good 008"  },
        { nameMarker: "M23", idMarker: "567A1BBC43", nameScene: "Entrada", idScene: "AB9E2B7BF7", wall: "M23", typeModel: "Good 008"  },
        { nameMarker: "M29", idMarker: "B7D702D8A3", nameScene: "Entrada", idScene: "AB9E2B7BF7", wall: "M29", typeModel: "Better 100"  },

        { nameMarker: "Ir a la sala", idMarker: "BB032C4C0A", nameScene: "Pasillo de entrada", idScene: "919521B462", wall: "", typeModel: ""  },
        { nameMarker: "Ir a la cocina", idMarker: "BA40633CE4", nameScene: "Pasillo de entrada", idScene: "919521B462", wall: "", typeModel: ""  },
        { nameMarker: "M29", idMarker: "69D946DEA9", nameScene: "Pasillo de entrada", idScene: "919521B462", wall: "M29", typeModel: "Better 100"  },
        { nameMarker: "M29 - 2", idMarker: "A8D5AC86FF", nameScene: "Pasillo de entrada", idScene: "919521B462", wall: "M29", typeModel: "Better 100"  },

        { nameMarker: "Ir a la cocina", idMarker: "FD05F4E50C", nameScene: "Sala", idScene: "2db264c2", wall: "", typeModel: "" },
        { nameMarker: "Ir al pasillo", idMarker: "98A1EE0C88", nameScene: "Sala", idScene: "2db264c2", wall: "", typeModel: "" },
        { nameMarker: "Ir a la terraza", idMarker: "C66BD770F8", nameScene: "Sala", idScene: "2db264c2", wall: "", typeModel: "" },
        { nameMarker: "M23", idMarker: "2792062DA0", nameScene: "Sala", idScene: "2db264c2", wall: "M23", typeModel: "Good 008" },
        { nameMarker: "M28", idMarker: "46C77F6324", nameScene: "Sala", idScene: "2db264c2", wall: "M28", typeModel: "Good 094Par" },
        { nameMarker: "M7", idMarker: "724EE089E9", nameScene: "Sala", idScene: "2db264c2", wall: "M7", typeModel: "Good 051" },
        { nameMarker: "M5", idMarker: "46C6D2B373", nameScene: "Sala", idScene: "2db264c2", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M2", idMarker: "EEA2A27C91", nameScene: "Sala", idScene: "2db264c2", wall: "M2", typeModel: "Good 001" },

        { nameMarker: "Ir a la sala", idMarker: "DF74B7CD24", nameScene: "Balc??n sala", idScene: "F2D6FC551C", wall: "", typeModel: "" },
        { nameMarker: "M30", idMarker: "EEBF32C5F0", nameScene: "Balc??n sala", idScene: "F2D6FC551C", wall: "M30", typeModel: "Better 089Par Residencial" },

        { nameMarker: "Ir a la sala", idMarker: "646681D758", nameScene: "Cocina - Comedor", idScene: "271e0e62", wall: "", typeModel: "" },
        { nameMarker: "Ir cuarto de servicios", idMarker: "78A72BEC47", nameScene: "Cocina - Comedor", idScene: "271e0e62", wall: "", typeModel: "" },
      	{ nameMarker: "Ir al balc??n", idMarker: "3237D058C2", nameScene: "Cocina - Comedor", idScene: "271e0e62", wall: "", typeModel: "" },
        { nameMarker: "M28", idMarker: "11C2E343F6", nameScene: "Cocina - Comedor", idScene: "271e0e62", wall: "M28", typeModel: "Good 094Par" },
        { nameMarker: "M13", idMarker: "B7AB1FBF22", nameScene: "Cocina - Comedor", idScene: "271e0e62", wall: "M13", typeModel: "Better 011" },
        { nameMarker: "M16", idMarker: "FA8796CCEF", nameScene: "Cocina - Comedor", idScene: "271e0e62", wall: "M16", typeModel: "Good 051" },
      
      	{ nameMarker: "Ir a la cocina", idMarker: "B28F6BA472", nameScene: "Balc??n cocina", idScene: "878AFA9F7D", wall: "", typeModel: "" },

        { nameMarker: "Ir cuarto armario", idMarker: "93F1CB6C0F", nameScene: "Cuarto de servicio", idScene: "9CDD67E66C", wall: "", typeModel: "" },
        { nameMarker: "Ir a la cocina", idMarker: "F67920AB32", nameScene: "Cuarto de servicio", idScene: "9CDD67E66C", wall: "", typeModel: "" },
        { nameMarker: "M5", idMarker: "E720113F74", nameScene: "Cuarto de servicio", idScene: "9CDD67E66C", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M12", idMarker: "5A9F8F57B3", nameScene: "Cuarto de servicio", idScene: "9CDD67E66C", wall: "M12", typeModel: "Good 089" },
        { nameMarker: "M18", idMarker: "D25DA559B7", nameScene: "Cuarto de servicio", idScene: "9CDD67E66C", wall: "M18", typeModel: "Good 089" },
        { nameMarker: "M16", idMarker: "FE8DE315E4", nameScene: "Cuarto de servicio", idScene: "9CDD67E66C", wall: "M16", typeModel: "Good 051" },

        { nameMarker: "Ir al cuarto de servicio", idMarker: "0B450ED521", nameScene: "Cuarto armario", idScene: "71A83C0223", wall: "", typeModel: "" },
        { nameMarker: "M2", idMarker: "7AD48A0DFD", nameScene: "Cuarto armario", idScene: "71A83C0223", wall: "M2", typeModel: "Good 051" },
        { nameMarker: "M18", idMarker: "DE06BCFB95", nameScene: "Cuarto armario", idScene: "71A83C0223", wall: "M18", typeModel: "Good 089" },

        { nameMarker: "Ir a la sala", idMarker: "A230F9E65A", nameScene: "Pasillo principal", idScene: "d8f96dd6", wall: "", typeModel: "" },
        { nameMarker: "Ba??o social", idMarker: "41E08B0761", nameScene: "Pasillo principal", idScene: "d8f96dd6", wall: "", typeModel: "" },
        { nameMarker: "Ir habitaci??n 1", idMarker: "7A44B5B2C3", nameScene: "Pasillo principal", idScene: "d8f96dd6", wall: "", typeModel: "" },
        { nameMarker: "Ir habitaci??n 2", idMarker: "AED51101BE", nameScene: "Pasillo principal", idScene: "d8f96dd6", wall: "", typeModel: "" },
        { nameMarker: "Ir habitaci??n principal", idMarker: "A60449997B", nameScene: "Pasillo principal", idScene: "d8f96dd6", wall: "", typeModel: "" },
        { nameMarker: "M2", idMarker: "E836AA826E", nameScene: "Pasillo principal", idScene: "d8f96dd6", wall: "M2", typeModel: "Good 051" },
        { nameMarker: "M10", idMarker: "5B5F3F8D0A", nameScene: "Pasillo principal", idScene: "d8f96dd6", wall: "M10", typeModel: "Good 051" },

        { nameMarker: "Ir al pasillo", idMarker: "CF146238B3", nameScene: "Ba??o social", idScene: "6C58A13D4C", wall: "", typeModel: "" },
        { nameMarker: "M10", idMarker: "0F35212408", nameScene: "Ba??o social", idScene: "6C58A13D4C", wall: "M10", typeModel: "Good 051" },
        { nameMarker: "M7", idMarker: "B10F324947", nameScene: "Ba??o social", idScene: "6C58A13D4C", wall: "M7", typeModel: "Good 051" },
        { nameMarker: "M6", idMarker: "90DE98CB2F", nameScene: "Ba??o social", idScene: "6C58A13D4C", wall: "M6", typeModel: "Good 017" },
        { nameMarker: "M29", idMarker: "07555D94CF", nameScene: "Ba??o social", idScene: "6C58A13D4C", wall: "M29", typeModel: "Better 100" },

        { nameMarker: "Ir al pasillo", idMarker: "A44921649D", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "", typeModel: "" },
        { nameMarker: "Ir al ba??o", idMarker: "A69D56E666", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "", typeModel: "" },
        { nameMarker: "Ir al balc??n", idMarker: "7E4B2EFAA4", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "", typeModel: "" },
        { nameMarker: "Camara 2", idMarker: "879C8541FC", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "", typeModel: "" },
        { nameMarker: "M6", idMarker: "496A95AF1E", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "M6", typeModel: "Good 017" },
        { nameMarker: "M5", idMarker: "CFF43B0DB2", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M5 - 2", idMarker: "143FDFCAD3", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M12", idMarker: "8DCF8545F6", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "M12", typeModel: "Good 089" },
        { nameMarker: "M2", idMarker: "6EB383728A", nameScene: "Habitaci??n 1", idScene: "7ADB2FC296", wall: "M2", typeModel: "Good 051" },

        { nameMarker: "Ir a la habitaci??n", idMarker: "9DC2A81B24", nameScene: "Ba??o habitaci??n 1", idScene: "2EF8223AB6", wall: "", typeModel: "" },
        { nameMarker: "M29", idMarker: "77E4C34A19", nameScene: "Ba??o habitaci??n 1", idScene: "2EF8223AB6", wall: "M29", typeModel: "" },
        { nameMarker: "M5", idMarker: "C7C812B703", nameScene: "Ba??o habitaci??n 1", idScene: "2EF8223AB6", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M5 - 2", idMarker: "9872B672BE", nameScene: "Ba??o habitaci??n 1", idScene: "2EF8223AB6", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M30", idMarker: "DE7D4CAC99", nameScene: "Ba??o habitaci??n 1", idScene: "2EF8223AB6", wall: "M30", typeModel: "Better 089Par Residencial" },
        { nameMarker: "M30 - 2", idMarker: "959FA78668", nameScene: "Ba??o habitaci??n 1", idScene: "2EF8223AB6", wall: "M30", typeModel: "Better 089Par Residencial" },

        { nameMarker: "Ir a la habitaci??n", idMarker: "3398503E26", nameScene: "Balc??n habitaci??n 1", idScene: "893F759F6D", wall: "", typeModel: "" },
        { nameMarker: "M30", idMarker: "11F7504F48", nameScene: "Balc??n habitaci??n 1", idScene: "893F759F6D", wall: "M30", typeModel: "Better 089Par Residencial" },

        { nameMarker: "Ir al pasillo", idMarker: "B08C51B444", nameScene: "Habitaci??n 2", idScene: "3B8E9C6B79", wall: "", typeModel: "" },
        { nameMarker: "Ir al ba??o", idMarker: "7C06C87CFD", nameScene: "Habitaci??n 2", idScene: "3B8E9C6B79", wall: "", typeModel: "" },
        { nameMarker: "Ir al balc??n", idMarker: "4950369250", nameScene: "Habitaci??n 2", idScene: "3B8E9C6B79", wall: "", typeModel: "" },
        { nameMarker: "Ir al armario", idMarker: "98EF8A2D5C", nameScene: "Habitaci??n 2", idScene: "3B8E9C6B79", wall: "", typeModel: "" },
        { nameMarker: "Camara 2", idMarker: "CD96EE2391", nameScene: "Habitaci??n 2", idScene: "3B8E9C6B79", wall: "", typeModel: "" },
        { nameMarker: "M1", idMarker: "0C15EF30A4", nameScene: "Habitaci??n 2", idScene: "3B8E9C6B79", wall: "M1", typeModel: "Good 001" },
        { nameMarker: "M2", idMarker: "E056AAE330", nameScene: "Habitaci??n 2", idScene: "3B8E9C6B79", wall: "M2", typeModel: "Good 001" },
        { nameMarker: "M29", idMarker: "B49F26FC7B", nameScene: "Habitaci??n 2", idScene: "3B8E9C6B79", wall: "M29", typeModel: "Better 100" },

        { nameMarker: "Ir a la habitaci??n", idMarker: "52642FCF46", nameScene: "Armario habitaci??n 2", idScene: "8D91C74057", wall: "", typeModel: "" },
        { nameMarker: "M5", idMarker: "130B5D342D", nameScene: "Armario habitaci??n 2", idScene: "8D91C74057", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M29", idMarker: "6243C286F7", nameScene: "Armario habitaci??n 2", idScene: "8D91C74057", wall: "M29", typeModel: "Better 100" },
        { nameMarker: "M2", idMarker: "5432B583AF", nameScene: "Armario habitaci??n 2", idScene: "8D91C74057", wall: "M2", typeModel: "Good 001" },

        { nameMarker: "Ir a la habitaci??n", idMarker: "1AF8F5364A", nameScene: "Ba??o habitaci??n 2", idScene: "7510C39F76", wall: "", typeModel: "" },
        { nameMarker: "M30", idMarker: "2DAEC8D191", nameScene: "Ba??o habitaci??n 2", idScene: "7510C39F76", wall: "M30", typeModel: "Better 089Par Residencial" },
        { nameMarker: "M12", idMarker: "6548099645", nameScene: "Ba??o habitaci??n 2", idScene: "7510C39F76", wall: "M12", typeModel: "Good 089" },
        { nameMarker: "M5", idMarker: "FEE2B99709", nameScene: "Ba??o habitaci??n 2", idScene: "7510C39F76", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M5 - 2", idMarker: "CA01EB8D24", nameScene: "Ba??o habitaci??n 2", idScene: "7510C39F76", wall: "M5", typeModel: "Good 051" },

        { nameMarker: "Ir a la habitaci??n", idMarker: "F34C8172D1", nameScene: "Balc??n habitaci??n 2", idScene: "BABEFF9E8A", wall: "", typeModel: "" },
        { nameMarker: "M30", idMarker: "8399975901", nameScene: "Balc??n habitaci??n 2", idScene: "BABEFF9E8A", wall: "M30", typeModel: "Better 089Par Residencial" },

        { nameMarker: "Ir al pasillo", idMarker: "8C34317978", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "", typeModel: "" },
        { nameMarker: "Ir al ba??o", idMarker: "A2C8E0232D", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "", typeModel: "" },
        { nameMarker: "Ir al armario", idMarker: "44B3836CD7", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "", typeModel: "" },
        { nameMarker: "Ir al balc??n", idMarker: "CCAEB7A463", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "", typeModel: "" },
        { nameMarker: "Camara 2", idMarker: "E83AAB6C85", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "", typeModel: "" },
        { nameMarker: "M28", idMarker: "4E7C821E2D", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "M28", typeModel: "Good 094Par" },
        { nameMarker: "M1", idMarker: "27BF7220A7", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "M1", typeModel: "Good 001" },
        { nameMarker: "M2", idMarker: "6284EEB521", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "M2", typeModel: "Good 001" },
        { nameMarker: "M5", idMarker: "9FD518839C", nameScene: "Habitaci??n principal", idScene: "88761064BB", wall: "M5", typeModel: "Good 051" },

        { nameMarker: "Ir a la habitaci??n", idMarker: "A5E70322CD", nameScene: "Armario habitaci??n principal", idScene: "C33AC38991", wall: "", typeModel: "" },
        { nameMarker: "M2", idMarker: "2BC0986B85", nameScene: "Armario habitaci??n principal", idScene: "C33AC38991", wall: "M2", typeModel: "Good 001" },
        { nameMarker: "M5", idMarker: "A4538BF171", nameScene: "Armario habitaci??n principal", idScene: "C33AC38991", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M28", idMarker: "E35B79704F", nameScene: "Armario habitaci??n principal", idScene: "C33AC38991", wall: "M28", typeModel: "Good 094Par" },
        { nameMarker: "M29", idMarker: "65307FB571", nameScene: "Armario habitaci??n principal", idScene: "C33AC38991", wall: "M29", typeModel: "Better 100" },
        { nameMarker: "M12", idMarker: "979B404B0E", nameScene: "Armario habitaci??n principal", idScene: "C33AC38991", wall: "M12", typeModel: "Good 089" },

        { nameMarker: "Ir a la habitaci??n", idMarker: "F34E948A8F", nameScene: "Ba??o habitaci??n principal", idScene: "B37EF65A4F", wall: "", typeModel: "" },
        { nameMarker: "M5", idMarker: "4F5186254E", nameScene: "Ba??o habitaci??n principal", idScene: "B37EF65A4F", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M5 - 2", idMarker: "580B35747C", nameScene: "Ba??o habitaci??n principal", idScene: "B37EF65A4F", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M5 - 3", idMarker: "9224617367", nameScene: "Ba??o habitaci??n principal", idScene: "B37EF65A4F", wall: "M5", typeModel: "Good 051" },
        { nameMarker: "M12", idMarker: "48FB621206", nameScene: "Ba??o habitaci??n principal", idScene: "B37EF65A4F", wall: "M12", typeModel: "Good 089" },
        { nameMarker: "M12 - 2", idMarker: "1D097CF953", nameScene: "Ba??o habitaci??n principal", idScene: "B37EF65A4F", wall: "M12", typeModel: "Good 089" },
        { nameMarker: "M29", idMarker: "EC493C4A27", nameScene: "Ba??o habitaci??n principal", idScene: "B37EF65A4F", wall: "M29", typeModel: "Better 100" },

        { nameMarker: "Ir a la habitaci??n", idMarker: "44D73A8CBD", nameScene: "Balc??n habitaci??n principal", idScene: "F1C10E9B62", wall: "", typeModel: "" }
    ];


     
    const elementMarkers = [
        { idScene: 'AB9E2B7BF7', nameScene: "Entrada", elemMap: elementGoPasilloEntrada },
        { idScene: '919521B462', nameScene: "Pasillo de entrada", elemMap: elementGoEntrada },
        { idScene: '2db264c2',   nameScene: "Sala", elemMap: elementGoSala },
        { idScene: 'F2D6FC551C', nameScene: "Balc??n sala", elemMap: elementGoBalconSala },
        { idScene: '271e0e62',   nameScene: "Cocina - Comedor", elemMap: elementGoCocina },
      	{ idScene: '878AFA9F7D', nameScene: "Balc??n Cocina", elemMap: elementGoBalconCocina },
        { idScene: '9CDD67E66C', nameScene: "Cuarto de servicio", elemMap: elementGoCuartoServicio },
        { idScene: '71A83C0223', nameScene: "Cuarto armario", elemMap: elementGoArmario },
        { idScene: 'd8f96dd6',   nameScene: "Pasillo principal", elemMap: elementGoPasilloPrincipal },
        { idScene: '6C58A13D4C', nameScene: "Ba??o social", elemMap: elementGoBanoServicio },
        { idScene: '7ADB2FC296', nameScene: "Habitaci??n 1", elemMap: elementGoHabitacionOne },
        { idScene: 'C39F7B031F', nameScene: "Habitaci??n 1 camara 2", elemMap: '' },
        { idScene: '2EF8223AB6', nameScene: "Ba??o habitaci??n 1", elemMap: elementGoHabitacionOneBano },
        { idScene: '893F759F6D', nameScene: "Balc??n habitaci??n 1", elemMap: elementGoHabitacionOneBalcon },
        { idScene: '3B8E9C6B79', nameScene: "Habitaci??n 2", elemMap: elementGoHabitacionTwo },
        { idScene: '2E46948F4C', nameScene: "Habitaci??n 2 c??mara 2", elemMap: '' },
        { idScene: '8D91C74057', nameScene: "Armario habitaci??n 2", elemMap: elementGoHabitacionTwoArmario },
        { idScene: '7510C39F76', nameScene: "Ba??o habitaci??n 2", elemMap: elementGoHabitacionTwoBano },
        { idScene: 'BABEFF9E8A', nameScene: "Balc??n habitaci??n 2", elemMap: elementGoHabitacionTwoBalcon },
        { idScene: '88761064BB', nameScene: "Habitaci??n principal", elemMap: elementGoHabitacionThree },
        { idScene: '0DD2D21D89', nameScene: "Habitaci??n principal c??mara 2", elemMap: '' },
        { idScene: 'C33AC38991', nameScene: "Armario habitaci??n principal", elemMap: elementGoArmarioHabitacionThree },
        { idScene: 'B37EF65A4F', nameScene: "Ba??o habitaci??n principal", elemMap: elementGoHabitacionThreeBano },
        { idScene: 'F1C10E9B62', nameScene: "Balc??n habitaci??n principal", elemMap: elementGoHabitacionThreeBalcon },
    ];


     
    elementGoPasilloEntrada.on('click', () => { onSetScene( "AB9E2B7BF7", elementGoPasilloEntrada ); });
    elementGoEntrada.on('click', () => { onSetScene( "919521B462", elementGoEntrada ); });
    elementGoSala.on('click', () => { onSetScene( "2db264c2", elementGoSala ); });
    elementGoBalconSala.on('click', () => { onSetScene( "F2D6FC551C", elementGoBalconSala ); });
    elementGoCocina.on('click', () => { onSetScene( "271e0e62", elementGoCocina ); });
  	elementGoBalconCocina.on('click', () => { onSetScene( "878AFA9F7D", elementGoBalconCocina ); });
    elementGoCuartoServicio.on('click', () => { onSetScene( "9CDD67E66C", elementGoCuartoServicio ); });
    elementGoArmario.on('click', () => { onSetScene( "71A83C0223", elementGoArmario ); });
    elementGoPasilloPrincipal.on('click', () => { onSetScene( "d8f96dd6", elementGoPasilloPrincipal ); });
    elementGoBanoServicio.on('click', () => { onSetScene( "6C58A13D4C", elementGoBanoServicio ); });
    elementGoHabitacionOne.on('click', () => { onSetScene( "7ADB2FC296", elementGoHabitacionOne ); });
    elementGoHabitacionOneBano.on('click', () => { onSetScene( "2EF8223AB6", elementGoHabitacionOneBano ); });
    elementGoHabitacionOneBalcon.on('click', () => { onSetScene( "893F759F6D", elementGoHabitacionOneBalcon ); });
    elementGoHabitacionTwo.on('click', () => { onSetScene( "3B8E9C6B79", elementGoHabitacionTwo ); });
    elementGoHabitacionTwoArmario.on('click', () => { onSetScene( "8D91C74057", elementGoHabitacionTwoArmario ); });
    elementGoHabitacionTwoBano.on('click', () => { onSetScene( "7510C39F76", elementGoHabitacionTwoBano ); });
    elementGoHabitacionTwoBalcon.on('click', () => { onSetScene( "BABEFF9E8A", elementGoHabitacionTwoBalcon ); });
    elementGoHabitacionThree.on('click', () => { onSetScene( "88761064BB", elementGoHabitacionThree ); });
    elementGoArmarioHabitacionThree.on('click', () => { onSetScene( "C33AC38991", elementGoArmarioHabitacionThree ); });
    elementGoHabitacionThreeBano.on('click', () => { onSetScene( "B37EF65A4F", elementGoHabitacionThreeBano ); });
    elementGoHabitacionThreeBalcon.on('click', () => { onSetScene( "F1C10E9B62", elementGoHabitacionThreeBalcon ); });


     
    itemEntrada.on('click', () => { onSetScene( "AB9E2B7BF7", itemEntrada, false ); });
    itemSala.on('click', () => { onSetScene( "2db264c2", itemSala, false ); });
    itemCocinaComedor.on('click', () => { onSetScene( "271e0e62", itemCocinaComedor, false ); });
    itemBanoSocial.on('click', () => { onSetScene( "6C58A13D4C", itemBanoSocial, false ); });
    itemHabitacionPrincipal.on('click', () => { onSetScene( "88761064BB", itemHabitacionPrincipal, false ); });


     
    const onSetScene = ( idScene, element, slider = true ) => {
        window.scene.setScene({ id: idScene }); 
        const currentScene = elementMarkers.find( scene => scene.idScene == idScene );  

        if ( currentScene ) { // go for scene, save location
            const email = jQuery('#currentUserEmail').val();
            const dataScene = { email: email, nameScena: currentScene.nameScene }

            registerDataMarker( dataScene, urlLocation ) // Register location  =>  email, nombre de la escena
        }

        if ( slider ) {
            onMarkerActive();
            element.css('background-image', `url(${urlActiveMarker})`);
            markerActive = true;
        }
    }
    const onMarkerActive = () => {
        if ( markerActive ) {
            elementMarkers.map( (obj) => {  
                if ( obj.elemMap ) obj.elemMap.css('background-image', `url(${urlMarker})`)                
            });
            markerActive = false;
        }
    }


     
	elementGoPasilloEntrada.hover( () => { addSpan('Entrada') }, () => { removeSpan() } );   
	elementGoEntrada.hover( () => { addSpan('Pasillo entrada') }, () => { removeSpan() } );   
	elementGoSala.hover( () => { addSpan('Sala') }, () => { removeSpan() } );   
	elementGoBalconSala.hover( () => { addSpan('Balc??n Sala') }, () => { removeSpan() } );   
	elementGoCocina.hover( () => { addSpan('Cocina - Comedor') }, () => { removeSpan() } );   
  	elementGoBalconCocina.hover( () => { addSpan('Balc??n Cocina') }, () => { removeSpan() } );   
	elementGoCuartoServicio.hover( () => { addSpan('Cuarto de servicio') }, () => { removeSpan() } );   
	elementGoArmario.hover( () => { addSpan('Cuarto Armario') }, () => { removeSpan() } );   
	elementGoPasilloPrincipal.hover( () => { addSpan('Pasillo principal') }, () => { removeSpan() } );   
	elementGoBanoServicio.hover( () => { addSpan('Ba??o social') }, () => { removeSpan() } );   
	elementGoHabitacionOne.hover( () => { addSpan('Habitaci??n 1') }, () => { removeSpan() } );   
	elementGoHabitacionOneBano.hover( () => { addSpan('Ba??o habitaci??n 1') }, () => { removeSpan() } );   
	elementGoHabitacionOneBalcon.hover( () => { addSpan('Balc??n habitaci??n 1') }, () => { removeSpan() } );   
	elementGoHabitacionTwo.hover( () => { addSpan('Habitaci??n 2') }, () => { removeSpan() } );   
	elementGoHabitacionTwoArmario.hover( () => { addSpan('Armario habitaci??n 2') }, () => { removeSpan() } );   
	elementGoHabitacionTwoBano.hover( () => { addSpan('Ba??o habitaci??n 2') }, () => { removeSpan() } );   
	elementGoHabitacionTwoBalcon.hover( () => { addSpan('Balc??n habitaci??n 2') }, () => { removeSpan() } );   
	elementGoHabitacionThree.hover( () => { addSpan('Habitaci??n principal') }, () => { removeSpan() } );   
	elementGoArmarioHabitacionThree.hover( () => { addSpan('Armario habitaci??n principal') }, () => { removeSpan() } );   
	elementGoHabitacionThreeBano.hover( () => { addSpan('Ba??o habitaci??n principal') }, () => { removeSpan() } );   
	elementGoHabitacionThreeBalcon.hover( () => { addSpan('Balc??n habitaci??n principal') }, () => { removeSpan() } );   

    const addSpan = ( text ) => { 
        elementText.css('display', 'block');
        elementText.append(`<span style='color:#fff;'>${text}</span>`); 
    }
    const removeSpan = () => { 
        elementText.find( "span" ).last().remove(); 
        elementText.css('display', 'none');
    }

    
     
    window.onChangeScene = ( e ) => {
        const idMarker = e.cfg.id;
        const currentMarker = dataMarkers.find( marker => marker.idMarker === idMarker );

        if ( currentMarker ) {
            const idScene = e.cfg.linkSceneId;
            const email = jQuery('#currentUserEmail').val();

            if ( idScene ) { // go for scene, save location
                const currentScene = elementMarkers.find( scene => scene.idScene === idScene );
                const dataScene = { email: email, nameScena: currentScene.nameScene }

                registerDataMarker( dataScene, urlLocation ) // Register location  =>  email, nombre de la escena

                if ( currentScene.elemMap ) {
                    onMarkerActive();
                    currentScene.elemMap.css( 'background-image', `url(${urlActiveMarker})` )
                    markerActive = true
                }                

            } else { // click marker wall, save wall
                idCurrentMarker = idMarker;
                const dataMarker = { email: email, nameScena: currentMarker.nameScene, wall: currentMarker.wall, typeWall: currentMarker.typeModel }

                registerDataMarker( dataMarker, urlWall ) // Register muro  =>  email, nombre escena, referencia del muro
            }
        }  
    }


    
    const textWallGood051 = jQuery('#wallGood051');
    const textWallBetter088 = jQuery('#wallBetter088');
    const textWallBest077 = jQuery('#wallBest077');
    const contentWallGood051 = jQuery('#mainContentWallGood051');
    const contentWallBetter088 = jQuery('#mainContentWallBetter088');
    const contentWallBest077 = jQuery('#mainContentWallBest077');
  
  	const textWallM7Good051 = jQuery('#wallM7Good051');
    const textWallM7Better088 = jQuery('#wallM7Better088');
    const textWallM7Best077 = jQuery('#wallM7Best077');
    const contentWallM7Good051 = jQuery('#mainContentWallM7Good051');
    const contentWallM7Better088 = jQuery('#mainContentWallM7Better088');
    const contentWallM7Best077 = jQuery('#mainContentWallM7Best077');
  
  	const textWallM16Good051 = jQuery('#wallM16Good051');
    const textWallM16Better088 = jQuery('#wallM16Better088');
    const textWallM16Best077 = jQuery('#wallM16Best077');
    const contentWallM16Good051 = jQuery('#mainContentWallM16Good051');
    const contentWallM16Better088 = jQuery('#mainContentWallM16Better088');
    const contentWallM16Best077 = jQuery('#mainContentWallM16Best077');
  
    const textWallGood001 = jQuery('#wallGood001');
    const textWallBetter008 = jQuery('#wallBetter008');
    const textWallBest007 = jQuery('#wallBest007');
    const contentWallGood001 = jQuery('#mainContentWallGood001');
    const contentWallBetter008 = jQuery('#mainContentWallBetter008');
    const contentWallBest007 = jQuery('#mainContentWallBest007');
  
  	const textWallM2Good001 = jQuery('#wallM2Good001');
    const textWallM2Better008 = jQuery('#wallM2Better008');
    const textWallM2Best007 = jQuery('#wallM2Best007');
    const contentWallM2Good001 = jQuery('#mainContentWallM2Good001');
    const contentWallM2Better008 = jQuery('#mainContentWallM2Better008');
    const contentWallM2Best007 = jQuery('#mainContentWallM2Best007');

    const textWallGood100 = jQuery('#wallGood100');
    const textWallBetter012 = jQuery('#wallBetter012');
    const textWallBest061 = jQuery('#wallBest061');
    const contentWallGood100 = jQuery('#mainContentWallGood100');
    const contentWallBetter012 = jQuery('#mainContentWallBetter012');
    const contentWallBest061 = jQuery('#mainContentWallBest061');

  	const textWallGood017 = jQuery('#wallGood017');
    const textWallBetter023 = jQuery('#wallBetter023');
    const textWallBest078 = jQuery('#wallBest078');
    const contentWallGood017 = jQuery('#mainContentWallGood017');
    const contentWallBetter023 = jQuery('#mainContentWallBetter023');
    const contentWallBest078 = jQuery('#mainContentWallBest078');
  
  	const textWallBetter011 = jQuery('#wallBetter011');
    const textWallBest100 = jQuery('#wallBest100');
    const contentWallBetter011 = jQuery('#mainContentWallBetter011');
    const contentWallBest100 = jQuery('#mainContentWallBest100');
  
  	const textWallGood008 = jQuery('#wallGood008');
    const textWallBetter061 = jQuery('#wallBetter061');
    const textWallBest076 = jQuery('#wallBest076');
    const contentWallGood008 = jQuery('#mainContentWallGood008');
    const contentWallBetter061 = jQuery('#mainContentWallBetter061');
    const contentWallBest076 = jQuery('#mainContentWallBest076');
  
  	const textWallM23Good008 = jQuery('#wallM23Good008');
    const textWallM23Better061 = jQuery('#wallM23Better061');
    const textWallM23Best076 = jQuery('#wallM23Best076');
    const contentWallM23Good008 = jQuery('#mainContentWallM23Good008');
    const contentWallM23Better061 = jQuery('#mainContentWallM23Better061');
    const contentWallM23Best076 = jQuery('#mainContentWallM23Best076');


     
    textWallGood051.on('click', () => { isUserRegister( textWallGood051, contentWallGood051, 'Good 051' ); });
    textWallBetter088.on('click', () => { isUserRegister( textWallBetter088, contentWallBetter088, 'Better 088' ); });
    textWallBest077.on('click', () => { isUserRegister( textWallBest077, contentWallBest077, 'Best 077' ); });
  
  	textWallM7Good051.on('click', () => { isUserRegister( textWallM7Good051, contentWallM7Good051, 'Good 051' ); });
    textWallM7Better088.on('click', () => { isUserRegister( textWallM7Better088, contentWallM7Better088, 'Better 088' ); });
    textWallM7Best077.on('click', () => { isUserRegister( textWallM7Best077, contentWallM7Best077, 'Best 077' ); });
  
  	textWallM16Good051.on('click', () => { isUserRegister( textWallM16Good051, contentWallM16Good051, 'Good 051' ); });
    textWallM16Better088.on('click', () => { isUserRegister( textWallM16Better088, contentWallM16Better088, 'Better 088' ); });
    textWallM16Best077.on('click', () => { isUserRegister( textWallM16Best077, contentWallM16Best077, 'Best 077' ); });
  
  	textWallGood001.on('click', () => { isUserRegister( textWallGood001, contentWallGood001, 'Good 001' ); });
    textWallBetter008.on('click', () => { isUserRegister( textWallBetter008, contentWallBetter008, 'Better 008' ); });
    textWallBest007.on('click', () => { isUserRegister( textWallBest007, contentWallBest007, 'Best 007' ); });
  
  	textWallM2Good001.on('click', () => { isUserRegister( textWallM2Good001, contentWallM2Good001, 'Good 001' ); });
    textWallM2Better008.on('click', () => { isUserRegister( textWallM2Better008, contentWallM2Better008, 'Better 008' ); });
    textWallM2Best007.on('click', () => { isUserRegister( textWallM2Best007, contentWallM2Best007, 'Best 007' ); });

    textWallGood100.on('click', () => { isUserRegister( textWallGood100, contentWallGood100, 'Good 100' ); });
    textWallBetter012.on('click', () => { isUserRegister( textWallBetter012, contentWallBetter012, 'Better 012' ); });
    textWallBest061.on('click', () => { isUserRegister( textWallBest061, contentWallBest061, 'Best 061' ); });
  
  	textWallGood017.on('click', () => { isUserRegister( textWallGood017, contentWallGood017, 'Good 017' ); });
    textWallBetter023.on('click', () => { isUserRegister( textWallBetter023, contentWallBetter023, 'Better 023' ); });
    textWallBest078.on('click', () => { isUserRegister( textWallBest078, contentWallBest078, 'Best 078' ); });

  	textWallBetter011.on('click', () => { isUserRegister( textWallBetter011, contentWallBetter011, 'Better 011' ); });
    textWallBest100.on('click', () => { isUserRegister( textWallBest100, contentWallBest100, 'Best 100' ); });
  
  	textWallGood008.on('click', () => { isUserRegister( textWallGood008, contentWallGood008, 'Good 008' ); });
    textWallBetter061.on('click', () => { isUserRegister( textWallBetter061, contentWallBetter061, 'Better 061' ); });
    textWallBest076.on('click', () => { isUserRegister( textWallBest076, contentWallBest076, 'Best 076' ); });
  
  	textWallM23Good008.on('click', () => { isUserRegister( textWallM23Good008, contentWallM23Good008, 'Good 008' ); });
    textWallM23Better061.on('click', () => { isUserRegister( textWallM23Better061, contentWallM23Better061, 'Better 061' ); });
    textWallM23Best076.on('click', () => { isUserRegister( textWallM23Best076, contentWallM23Best076, 'Best 076' ); });

    
     
    const isUserRegister = ( textReference, elemMuro, typeModel ) => {
        const userEmail = jQuery('#currentUserEmail').val();
        
        if ( userEmail ) { // guardar la referencia del modelo
            changeColorTextModel( textReference, elemMuro );             

            // guardar la reverencia en la DB
            

        } else { // el usuario debe registrarse
            if ( confirm("Para continuar viendo las dem??s referencias, debes registrarte") ) {
                location.href = '/my-account/';
            }
        }  
    }

     
    const changeColorTextModel = ( elemText, elemMuro ) => {
      	elemText.parent().find('.content-references-walls').css('color', '#ffffff');
        
        elemText.css("color", "#000000")

      	elemMuro.parent().find('.main-content-walls-references').css('display', 'none');
        
        elemMuro.css("display", "block")
    }


     
    const registerDataMarker = ( dataMarker, url ) =>  {     
      return;
        if ( dataMarker.email ) {            
        
            jQuery.ajax({
                url: url,
                type: "POST",
              	data: dataMarker,
                success: function (response) {
                    console.log('Register... ', response);            
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log('Error... ',textStatus, errorThrown);
                }
            });
        }	
    }

});</script>
<!-- end Simple Custom CSS and JS -->
