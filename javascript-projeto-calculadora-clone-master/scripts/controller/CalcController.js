//classe começa com letra maiúscula
class CalController{
    constructor(){
        this._displayCalc = "0";
        this._dataAtual;
    }
    geDisplay(){
        return this._displayCalc;
    }
    set _displayCalc(valor){
        this._displayCalc=valor;
    }
}
/* 3 tipos de encapsulamento:
public - protect - privat
*/