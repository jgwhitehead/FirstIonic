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
  badfodMap: string[];
  checkedResult: boolean;
  showResult: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.badfodMap = ["Garlic",
    "Onions",
    "Aparagus",
    "Beans e.g. black, broad, kidney, lima, soya",
    "Cauliflower",
    "Cabbage, savoy",
    "Mange tout",
    "Mushrooms",
    "Peas",
    "Scallions / spring onions (white part)",
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
    "Wheat foods e.g. Bread, cereal, pasta",
    "Cashews",
    "Pistachio",
    "Cow milk",
    "Goat milk",
    "Rice milk",
    "Sheep's milk",
    "Soy milk made with soy beans",
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
    "Jam (mixed berries)",
    "Pasta sauce (cream based)",
    "Relish",
    "Tzatziki dip",
    "Agave",
    "High Frucose Corn Syrup (HFCS)",
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
    "Sodas with HFCS",
    "Fennel tea",
    "Herbal tea (strong)"]

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
  this.checkedResult =  this.badfodMap.indexOf(food)!==-1;
  this.showResult=true;
}
isBadFodmap(food){
  return this.badfodMap.indexOf(food)!==-1;
}

resetCheck(){
  this.showResult=false;
}
}
