// クラスの作成
let Car = class {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log('zoom zoom...');
  }
};

// 継承したクラスの作成
let Lamborghini = class extends Car {
  constructor(name) {
    super(name);
  }

  echo() {
    super.drive();
  }

  drive() {
    console.log(`fire ${this.name}`);
  }
};

// クラスの実行
let car = new Lamborghini('my lamb');
car.echo();
car.drive();
