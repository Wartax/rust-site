

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
  
  function numStr(a, b) {
    a = '' + a;
    b = b || ' ';
    var c = '',
      d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (var i = a.length - 1; i >= 0; i--) {
      c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  }
  
  function calcul() {
    var nb_roquette = document.getElementById("rocket-in").value;
    var nb_roquette_hv = document.getElementById("rocket-hv-in").value;
    var nb_roquette_inc = document.getElementById("rocket-inc-in").value;
    var nb_timed_explo = document.getElementById("timed-explo-in").value;
    var nb_explo_ammo = document.getElementById("explo-ammo-in").value;
  
  
    var nb_explo = nb_roquette * 10 + nb_roquette_inc * 1 + nb_timed_explo * 20;
    var nb_gp = nb_roquette * 650 + nb_roquette_hv * 100 + nb_roquette_inc * 300 + nb_timed_explo * 1000 + nb_explo_ammo * 10;
    var nb_sulfur = nb_gp * 2 + nb_explo * 10 + nb_explo_ammo * 5;
    var nb_coal = nb_gp * 3;
    var nb_lg = nb_explo * 3 + nb_roquette_inc * 250;
    var nb_cloth = nb_lg / 4 + nb_timed_explo * 5;
    var nb_fat = nb_lg * 3 / 4;
    var nb_metalfrags = nb_explo * 10 + nb_explo_ammo * 5;
    var nb_techtrash = nb_timed_explo * 2;
    var nb_pipe = nb_roquette * 2 + nb_roquette_hv * 1 + nb_roquette_inc * 2;
  
    document.getElementById("nb_gp").innerHTML = numStr(nb_gp);
    document.getElementById("nb_sulfur").innerHTML = numStr(nb_sulfur);
    document.getElementById("nb_coal").innerHTML = numStr(nb_coal);
    document.getElementById("nb_lg").innerHTML = numStr(nb_lg);
    document.getElementById("nb_cloth").innerHTML = numStr(Math.ceil(nb_cloth));
    document.getElementById("nb_fat").innerHTML = numStr(Math.ceil(nb_fat));
    document.getElementById("nb_explo").innerHTML = numStr(nb_explo);
    document.getElementById("nb_metalfrags").innerHTML = numStr(nb_metalfrags);
    document.getElementById("nb_techtrash").innerHTML = numStr(nb_techtrash);
    document.getElementById("nb_pipe").innerHTML = numStr(nb_pipe);
  }
  
  function calculMax() {
    var nb_sulfur = document.getElementById("souffres-in").value;
  
    var nb_gp = Math.floor(nb_sulfur / 20) * 10;
    var nb_roquette = nb_sulfur / 1400;
    var nb_roquette_hv = nb_sulfur / 200;
    var nb_roquette_inc = nb_sulfur / 610;
    var nb_timed_explo = nb_sulfur / 2200;
    var nb_explo_ammo = nb_sulfur / 25;
  
  
    document.getElementById("nb_max_gp").innerHTML = numStr(Math.floor(nb_gp));
    document.getElementById("nb_max_rocket").innerHTML = numStr(Math.floor(nb_roquette));
    document.getElementById("nb_max_rocket_hv").innerHTML = numStr(Math.floor(nb_roquette_hv));
    document.getElementById("nb_max_rocket_inc").innerHTML = numStr(Math.floor(nb_roquette_inc));
    document.getElementById("nb_max_timed_explo").innerHTML = numStr(Math.floor(nb_timed_explo));
    document.getElementById("nb_max_explo_ammo").innerHTML = numStr(Math.floor(nb_explo_ammo));
  }
  
  
  
  function Craft() {
  
      var nb_wooden_wall = document.getElementById("wooden-wall-in").value;
      var nb_stone_wall = document.getElementById("stone-wall-in").value;
      var nb_metal_wall = document.getElementById("metal-wall-in").value;
      var nb_armored_wall = document.getElementById("armored-wall-in").value;
      var nb_metal_door = document.getElementById("sheet-metal-door-in").value;
      var nb_garage_door = document.getElementById("garage-door-in").value;
      var nb_armored_door = document.getElementById("armored-door-in").value;
      var nb_ladder_hatch = document.getElementById("ladder-hatch-in").value;
      var nb_wooden_external_wall = document.getElementById("wooden-external-wall-in").value;
      var nb_stone_external_wall = document.getElementById("stone-external-wall-in").value;
      var nb_autoturret = document.getElementById("autoturret-in").value;
  
      var nb_tot_rocket = 0;
      var nb_tot_rocket_hv = 0;
      var nb_tot_rocket_inc = 0;
      var nb_tot_timed_explo = 0;
      var nb_tot_explo_ammo = 0;
      
      //roquette
  
      document.getElementById("nb_craft_rocket_1").innerHTML = nb_wooden_wall*2;
      nb_tot_rocket = nb_wooden_wall*2;
      document.getElementById("nb_craft_rocket_2").innerHTML = nb_stone_wall*4;
      nb_tot_rocket += nb_stone_wall*4;
      document.getElementById("nb_craft_rocket_3").innerHTML = nb_metal_wall*8;
      nb_tot_rocket += nb_metal_wall*8;
      document.getElementById("nb_craft_rocket_4").innerHTML = nb_armored_wall*15;
      nb_tot_rocket += nb_armored_wall*15;
      document.getElementById("nb_craft_rocket_5").innerHTML = nb_metal_door*2;
      nb_tot_rocket += nb_metal_door*2;
      document.getElementById("nb_craft_rocket_6").innerHTML = nb_garage_door*3;
      nb_tot_rocket += nb_garage_door*3;
      document.getElementById("nb_craft_rocket_7").innerHTML = nb_armored_door*4;
      nb_tot_rocket += nb_armored_door*4;
      document.getElementById("nb_craft_rocket_8").innerHTML = nb_ladder_hatch*2;
      nb_tot_rocket += nb_ladder_hatch*2;
      document.getElementById("nb_craft_rocket_9").innerHTML = nb_wooden_external_wall*3;
      nb_tot_rocket += nb_wooden_external_wall*3;
      document.getElementById("nb_craft_rocket_10").innerHTML = nb_stone_external_wall*4;
      nb_tot_rocket += nb_stone_external_wall*4;
      document.getElementById("nb_craft_rocket_11").innerHTML = nb_autoturret*4;
      nb_tot_rocket += nb_autoturret*4;
      document.getElementById("nb_tot_rocket").innerHTML = nb_tot_rocket;
  
      
  
      // roquette hv
  
  
      document.getElementById("nb_craft_rocket_hv_1").innerHTML = nb_wooden_wall*9;
      nb_tot_rocket_hv = nb_wooden_wall*9;
      document.getElementById("nb_craft_rocket_hv_2").innerHTML = nb_stone_wall*32;
      nb_tot_rocket_hv += nb_stone_wall*32;
      document.getElementById("nb_craft_rocket_hv_3").innerHTML = nb_metal_wall*67;
      nb_tot_rocket_hv += nb_metal_wall*67;
      document.getElementById("nb_craft_rocket_hv_4").innerHTML = nb_armored_wall*134;
      nb_tot_rocket_hv += nb_armored_wall*134;
      document.getElementById("nb_craft_rocket_hv_5").innerHTML = nb_metal_door*11;
      nb_tot_rocket_hv += nb_metal_door*11;
      document.getElementById("nb_craft_rocket_hv_6").innerHTML = nb_garage_door*25;
      nb_tot_rocket_hv += nb_garage_door*25;
      document.getElementById("nb_craft_rocket_hv_7").innerHTML = nb_armored_door*34;
      nb_tot_rocket_hv += nb_armored_door*34;
      document.getElementById("nb_craft_rocket_hv_8").innerHTML = nb_ladder_hatch*11;
      nb_tot_rocket_hv += nb_ladder_hatch*11;
      document.getElementById("nb_craft_rocket_hv_9").innerHTML = nb_wooden_external_wall*18;
      nb_tot_rocket_hv += nb_wooden_external_wall*18;
      document.getElementById("nb_craft_rocket_hv_10").innerHTML = nb_stone_external_wall*32;
      nb_tot_rocket_hv += nb_stone_external_wall*32;
      document.getElementById("nb_craft_rocket_hv_11").innerHTML = nb_autoturret*3;
      nb_tot_rocket_hv += nb_autoturret*3;
  
      document.getElementById("nb_tot_rocket_hv").innerHTML = nb_tot_rocket_hv;
  
      // roquette inc
  
      document.getElementById("nb_craft_rocket_inc_1").innerHTML = nb_wooden_wall*1;
      nb_tot_rocket_inc = nb_wooden_wall*1;
      document.getElementById("nb_craft_rocket_inc_2").innerHTML = nb_stone_wall*0;
      document.getElementById("nb_craft_rocket_inc_3").innerHTML = nb_metal_wall*0;
      document.getElementById("nb_craft_rocket_inc_4").innerHTML = nb_armored_wall*0;
      document.getElementById("nb_craft_rocket_inc_5").innerHTML = nb_metal_door*0;
      document.getElementById("nb_craft_rocket_inc_6").innerHTML = nb_garage_door*0;
      document.getElementById("nb_craft_rocket_inc_7").innerHTML = nb_armored_door*0;
      document.getElementById("nb_craft_rocket_inc_8").innerHTML = nb_ladder_hatch*0;
      document.getElementById("nb_craft_rocket_inc_9").innerHTML = nb_wooden_external_wall*1;
      nb_tot_rocket_inc += nb_wooden_external_wall*1;
      document.getElementById("nb_craft_rocket_inc_10").innerHTML = nb_stone_external_wall*0;
      document.getElementById("nb_craft_rocket_inc_11").innerHTML = nb_autoturret*1;
      nb_tot_rocket_inc += nb_autoturret*1;
  
      document.getElementById("nb_tot_rocket_inc").innerHTML = nb_tot_rocket_inc;
  
      // timed explo
      
      document.getElementById("nb_craft_timed_explo_1").innerHTML = nb_wooden_wall*1;
      nb_tot_timed_explo = nb_wooden_wall*1;
      document.getElementById("nb_craft_timed_explo_2").innerHTML = nb_stone_wall*2;
      nb_tot_timed_explo += nb_stone_wall*2;
      document.getElementById("nb_craft_timed_explo_3").innerHTML = nb_metal_wall*4;
      nb_tot_timed_explo += nb_metal_wall*4;
      document.getElementById("nb_craft_timed_explo_4").innerHTML = nb_armored_wall*8;
      nb_tot_timed_explo += nb_armored_wall*8;
      document.getElementById("nb_craft_timed_explo_5").innerHTML = nb_metal_door*1;
      nb_tot_timed_explo += nb_metal_door*1;
      document.getElementById("nb_craft_timed_explo_6").innerHTML = nb_garage_door*2;
      nb_tot_timed_explo += nb_garage_door*2;
      document.getElementById("nb_craft_timed_explo_7").innerHTML = nb_armored_door*2;
      nb_tot_timed_explo += nb_armored_door*2;
      document.getElementById("nb_craft_timed_explo_8").innerHTML = nb_ladder_hatch*1;
      nb_tot_timed_explo += nb_ladder_hatch*1;
      document.getElementById("nb_craft_timed_explo_9").innerHTML = nb_wooden_external_wall*2;
      nb_tot_timed_explo += nb_wooden_external_wall*2;
      document.getElementById("nb_craft_timed_explo_10").innerHTML = nb_stone_external_wall*2;
      nb_tot_timed_explo += nb_stone_external_wall*2;
      document.getElementById("nb_craft_timed_explo_11").innerHTML = nb_autoturret*1;
      nb_tot_timed_explo += nb_autoturret*1
  
      document.getElementById("nb_tot_timed_explo").innerHTML = nb_tot_timed_explo;
  
      // explo ammo
  
      document.getElementById("nb_craft_explo_ammo_1").innerHTML = nb_wooden_wall*49;
      nb_tot_explo_ammo = nb_wooden_wall*49;
      document.getElementById("nb_craft_explo_ammo_2").innerHTML = nb_stone_wall*185;
      nb_tot_explo_ammo += nb_stone_wall*185;
      document.getElementById("nb_craft_explo_ammo_3").innerHTML = nb_metal_wall*400;
      nb_tot_explo_ammo += nb_metal_wall*400;
      document.getElementById("nb_craft_explo_ammo_4").innerHTML = nb_armored_wall*799;
      nb_tot_explo_ammo += nb_armored_wall*799;
      document.getElementById("nb_craft_explo_ammo_5").innerHTML = nb_metal_door*63;
      nb_tot_explo_ammo += nb_metal_door*63;
      document.getElementById("nb_craft_explo_ammo_6").innerHTML = nb_garage_door*150;
      nb_tot_explo_ammo += nb_garage_door*150;
      document.getElementById("nb_craft_explo_ammo_7").innerHTML = nb_armored_door*200;
      nb_tot_explo_ammo += nb_armored_door*200;
      document.getElementById("nb_craft_explo_ammo_8").innerHTML = nb_ladder_hatch*63;
      nb_tot_explo_ammo += nb_ladder_hatch*63;
      document.getElementById("nb_craft_explo_ammo_9").innerHTML = nb_wooden_external_wall*98;
      nb_tot_explo_ammo += nb_wooden_external_wall*98;
      document.getElementById("nb_craft_explo_ammo_10").innerHTML = nb_stone_external_wall*185;
      nb_tot_explo_ammo += nb_stone_external_wall*185;
      document.getElementById("nb_craft_explo_ammo_11").innerHTML = nb_autoturret*112;
      nb_tot_explo_ammo += nb_autoturret*112;
  
      document.getElementById("nb_tot_explo_ammo").innerHTML = nb_tot_explo_ammo;
  
  
  }
  
  