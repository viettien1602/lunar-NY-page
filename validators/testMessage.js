function testWish(wish) {
    let invalidPattern = /.*d+m+|đm+|địt+|d+i+t+|mọe|đéo+|méo+|cặc|lồn|c+a+c+|l+o+n+|đít+|boogers|snot|poop|shucks|fuck|pussy|đĩ|ngu+|đụ|di+|v+l+|v+c+l+|cút|phắn|xéo|cứt|chó.*/i;
    return !invalidPattern.test(wish);
}

module.exports = testWish;
