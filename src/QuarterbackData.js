class QuarterbackData {
    
    constructor(id){
        this.id = id;
        this.DATA_PATH = {
            2543477 : "data/blakebortles.json",
            2560800 : "data/bakermayfield.json",
            2543499 : "data/derekcarr.json"
        };
    
        this.playerData = {};  
    }
    
    runTotalsCalculations(data){
        
        this.totalCmpPercentage(data);
        this.totalPassingYds(data);
        this.totalRushingYds(data);
        this.totalCarries(data);
        this.totalPassingTD(data);
        this.tdPassPercentage();
        this.totalRushingTD(data);
        this.tdRushPercentage();
        this.totalYds();
        this.totalTDs();
        this.totalInts(data);
        this.interceptedPassesPercentage();
        this.totalSacks(data);
        this.YdsPerAtt();
        this.YdsPerCarry();
        this.qbRating();
        
        return this.playerData;    
    }
    
    totalCmpPercentage(data){
        
        let completedPassesArr = data.rows.map(function(row){
            return row.Cmp;
        });
        
        let attArr = data.rows.map(function(row){
            return row.Att;
        });
        
        let totalCompletedPasses = completedPassesArr.reduce((acc, curVal) =>{
            return acc + curVal;
        })
        
        let totalAtts = attArr.reduce((acc, curVal) =>{
            return acc + curVal;
        });
        
        let cmpPercentage = (totalCompletedPasses / totalAtts) * 100;
        
     
        this.playerData['totalCmp'] = totalCompletedPasses;
        this.playerData['totalAtt'] = totalAtts;
        this.playerData['totalCmpPct'] = cmpPercentage
        
    }
    
    totalPassingYds(data){
        let psYdsArr = data.rows.map(function(row){
            return row.PsYds;
        });
        
        let totalPassingYards = psYdsArr.reduce((acc, curVal) =>{
            return acc + curVal;
        });
        
        this.playerData['totalPsYds'] = totalPassingYards;
    }
    
    totalRushingYds(data){
        //sum all RshYds
        
        let rshYdsArr = data.rows.map(function(row){
            return row.RshYds;
        });
        
        let totalRshYds = rshYdsArr.reduce((acc, curVal) =>{
            return acc + curVal;
        });
        
        this.playerData['totalRshYds'] = totalRshYds;
        
    }
    
    totalCarries(data){
        let carryArr = data.rows.map(function(row){
            return row.Rush
        });
        
        let totalNumCarries = carryArr.reduce((acc, curVal) =>{
            return acc + curVal;
        });
        
        this.playerData['totalCarries'] = totalNumCarries;
    }
    
    totalPassingTD(data){
        let passTDArr = data.rows.map(function(row){
            return row.PsTD
        });
        
        let totalPsTD = passTDArr.reduce((acc, curVal) =>{
            return acc + curVal;
        });
        
        this.playerData['totalPsTD'] = totalPsTD;
        
    }
    
    tdPassPercentage(){
        this.playerData['tdPsPct'] = ((this.playerData.totalPsTD / this.playerData.totalAtt) *100);
    }
    
    totalRushingTD(data){
        let RshTDArr = data.rows.map(function(row){
            return row.RshTD
        });
        
        let totalRshTD = RshTDArr.reduce((acc, curVal) =>{
            return acc + curVal;
        });
        
        this.playerData['totalRshTD'] = totalRshTD;
        
    }
    
    tdRushPercentage(){
        this.playerData['tdRshPct'] = ((this.playerData.totalRshTD / this.playerData.totalCarries) *100);
    }
    
    totalYds(){
        this.playerData['totalYds'] = this.playerData.totalPsYds + this.playerData.totalRshYds;
    }
    totalTDs(){
        this.playerData['totalTDs'] = this.playerData.totalPsTD + this.playerData.totalRshTD;   
    }
    
    totalInts(data){
        let interceptionArr = data.rows.map(function(row){
            return row.Int
        });
        
        let totalNumInts = interceptionArr.reduce((acc, curVal) =>{
            return acc + curVal;
        });
        
        this.playerData['totalInts'] = totalNumInts;
    }
    
    interceptedPassesPercentage(){
        this.playerData['intPsPct'] = ((this.playerData.totalInts / this.playerData.totalAtt) * 100);
    }
    
    totalSacks(data){
        let sackArr = data.rows.map(function(row){
            return row.Sack
        });
        
        let totalNumSacks = sackArr.reduce((acc, curVal) =>{
            return acc + curVal;
        });
        
        this.playerData['totalSacks'] = totalNumSacks;
    }
    
    YdsPerAtt(){
        this.playerData['YdsPerAtt'] = (this.playerData.totalPsYds / this.playerData.totalAtt);
    }
    
    YdsPerCarry(){
        this.playerData['YdsPerCarry'] = (this.playerData.totalRshYds / this.playerData.totalCarries);
    }
    
    qbRating(){
        //1. divide completed passes by pass attempts multiply that by 100 then subtract 30 then multiply 0.05
        //2. divide passing yards by pass attempts then subtract 3 then divide by 4
        //3. divide touchdown passes by pass attempts multiply that by 100 then multiply that by 0.2
        //4. divide interceptions by pass attempts multiply that by 100 then multiply by 0.25 then subtract the result from 2.375
        //5. note that the sum of each step cannot be > 2.375 or < 0
        //6. Add the results of steps 1 -4 then multiply by 100 then divide by 6
        //7. QB rating > 100 is very good, 80 - 100 about avg, < 80 not so great
        
        let step1 = (this.playerData.totalCmpPct - 30 ) * 0.05;
        let step2 = (this.playerData.YdsPerAtt - 3) / 4;
        let step3 = this.playerData.tdPsPct * 0.2;
        let step4 = 2.375 - (this.playerData.intPsPct * 0.25);
        let calculatedQBRating = ((step1 + step2 + step3 + step4) /6 ) *100;
        
        this.playerData['qbRating'] = calculatedQBRating;
        
    }
    
    
    
}