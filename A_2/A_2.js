function alternatingSums(a) {
    let team1_weight = 0;
    let team2_weight = 0;
    let final_weight = [];
    for(let i=0;i<a.length;i++){
        if(i%2==0){
            a[i]= Number(a[i]);
            team1_weight+=Number(a[i]);
        }
        else{
            a[i]= Number(a[i]);
            team2_weight+=Number(a[i]);
        }
    }
    final_weight.push(team1_weight);
    final_weight.push(team2_weight);
    console.log(final_weight);
}

alternatingSums([60, 40, 55, 75, 64]);

