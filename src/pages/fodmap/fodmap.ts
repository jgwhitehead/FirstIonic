import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

// import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-fodmap',
  templateUrl: 'fodmap.html'
})


export class FodmapPage {
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  badFodMap: string[];
  goodFodMap:string[];
  checkedResult: boolean;
  showResult: boolean;
  fodmapResult: Tristate;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.badFodMap = ["Garlic",
    "Onion",
    "Aparagus",
    "Beans",
    "black"," broad", "kidney", "lima", "soya",
    "Cauliflower",
    "Cabbage",
    "Mange tout",
    "Mushrooms",
    "Peas",
    "Scallions", "spring onions",
    "Apples",
    "Apricot",
    "Avocado",
    "Blackberries",
    "Grapefruit",
    "Mango",
    "Peaches",
    "Pears",
    "Plums",
    "Raisins",
    "Sultanas",
    "Watermelon",
    "Chorizo",
    "Sausages",
    "Processed meat",
    "Barley",
    "Bran",
    "Cous cous",
    "Gnocchi",
    "Granola",
    "Muesli",
    "Muffins",
    "Rye",
    "Semolina",
    "Spelt",
    "Wheat", "Bread", "cereal", "pasta",
    "Cashews",
    "Pistachio",
    "Cow milk",
    "Goat milk",
    "Rice milk",
    "Sheep's milk",
    "Soy milk",
    "Buttermilk",
    "Cream",
    "Custard",
    "Greek yoghurt",
    "Ice cream",
    "Sour cream",
    "Yoghurt",
    "Cream cheese",
    "Ricotta cheese",
    "Hommus dip",
    "Jam",
    "Pasta sauce (cream based)",
    "Relish",
    "Tzatziki dip",
    "Agave",
    "High Frucose Corn Syrup",
    "Honey",
    "Inulin",
    "Isomalt",
    "Maltitol",
    "Mannitol",
    "Sorbitol",
    "Xylitol",
    "Coconut water",
    "Apple juice",
    "Pear juice",
    "Mango juice",
    "Soda",
    "Fennel tea",
    "Herbal tea"]

    this.goodFodMap = [
      "good"
    ]

    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

  //   this.items = [];
  //   for(let i = 1; i < 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }

  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item: item
  //   });
  // }
}
checkBadFodmap(food){
  // this.checkedResult =  this.badFodMap.indexOf(food)!==-1;
  var badIndex = this.badFodMap.findIndex(item => food.toLowerCase() === item.toLowerCase());
    this.checkedResult = (badIndex  === -1);
    if(this.checkedResult){

      // this.fodmapResult = Tristate.False;
    // }else{
    //   var goodIndex = this.goodFodMap.findIndex(item => food.toLowerCase() === item.toLowerCase());
    //   if(goodIndex){
    //       this.fodmapResult = Tristate.True;
    //   }else{
    //       this.fodmapResult = Tristate.Unknown;
    //   }
    }

    this.showResult=true;
}
isbadFodMap(food){
  return this.badFodMap.indexOf(food)!==-1;
}

resetCheck(){
  this.showResult=false;
}
}

export enum Tristate {
    False,
    True,
    Unknown
  }
