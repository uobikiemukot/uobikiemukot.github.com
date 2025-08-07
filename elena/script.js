document.addEventListener('DOMContentLoaded', function() {
    // --- データ定義 ---

    // ★★★【ここに combos.json の配列の中身を貼り付け】★★★
    // 例: const comboData = [ {"id":1, ...}, {"id":2, ...} ];
    const comboData = [
    {"id":1,"comboName":"6強P~強P~強P","starter":"6強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2000,"plusFrame":40,"saGain":0.24,"driveGain":1.1,"carry":2,"okizeme":4,"difficulty":1,"notes":""},
    {"id":2,"comboName":"DI>J強P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":3710,"plusFrame":25,"saGain":0.79,"driveGain":1.8,"carry":1,"okizeme":3,"difficulty":5,"notes":"J強Pを最低空で出す必要あり"},
    {"id":3,"comboName":"DI>膝崩れに屈中P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":1,"damage":3550,"plusFrame":25,"saGain":0.75,"driveGain":1.7,"carry":3,"okizeme":4,"difficulty":3,"notes":"相手が初期位置だとぎりぎり不可、それより壁に近いと可能"},
    {"id":4,"comboName":"DI>膝崩れに強P~強P>ラッシュ屈強P>強スピン>強ライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3397,"plusFrame":37,"saGain":0.78,"driveGain":0.4,"carry":5,"okizeme":4,"difficulty":3,"notes":"8割運ぶ"},
    {"id":5,"comboName":"DI>J強P>ラッシュ屈強P>強ライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2276,"plusFrame":25,"saGain":0.58,"driveGain":0.2,"carry":3,"okizeme":3,"difficulty":5,"notes":"入れ替え、前ステップで+5シミー可能"},
    {"id":6,"comboName":"DI>膝崩れに強P~強P>ラッシュ屈強P>弱スピン>弱リンクス～強化ハーベスト>中ライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3562,"plusFrame":36,"saGain":0.89,"driveGain":0.4,"carry":5,"okizeme":2,"difficulty":3,"notes":""},
    {"id":7,"comboName":"DI>J強P>ラッシュ強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>中ライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":3465,"plusFrame":36,"saGain":0.65,"driveGain":0.2,"carry":5,"okizeme":4,"difficulty":3,"notes":"7.5割運ぶ"},
    {"id":8,"comboName":"DI>J強P>ODライノ>強昇竜","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":2860,"plusFrame":22,"saGain":0.34,"driveGain":0.4,"carry":5,"okizeme":1,"difficulty":3,"notes":"入れ替え"},
    {"id":9,"comboName":"DI>膝崩れに強P~強P>ＯＤライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":2640,"plusFrame":39,"saGain":0.62,"driveGain":0.4,"carry":3,"okizeme":4,"difficulty":2,"notes":"入れ替え、前ステ歩きで起き攻め可能"},
    {"id":10,"comboName":"DI>膝崩れに強P~強P>ＯＤライノ＞弱昇竜","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":3040,"plusFrame":36,"saGain":0.72,"driveGain":0.6,"carry":4,"okizeme":3,"difficulty":3,"notes":"入れ替え、ラッシュで起き攻め可能"},
    {"id":11,"comboName":"DI>膝崩れに強P~強P>ＯＤライノ＞中昇竜","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":3120,"plusFrame":25,"saGain":0.72,"driveGain":0.6,"carry":4,"okizeme":2,"difficulty":3,"notes":"入れ替え"},
    {"id":12,"comboName":"DI>ラッシュ屈強P>屈中P>DR>屈強P>中P~中P>DR>屈強P>屈中K~強K>屈弱P>弱K>弱ライノ>SA3","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":5124,"plusFrame":0,"saGain":1.04,"driveGain":1.5,"carry":2,"okizeme":4,"difficulty":4,"notes":""},
    {"id":13,"comboName":"J強P>屈強P>強スピン>弱ライノ>弱昇竜","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":2760,"plusFrame":36,"saGain":0.48,"driveGain":2.6,"carry":1,"okizeme":5,"difficulty":3,"notes":""},
    {"id":14,"comboName":"J強P>屈強P>強スピン>弱ライノ>中昇竜","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":2800,"plusFrame":25,"saGain":0.48,"driveGain":2.6,"carry":1,"okizeme":3,"difficulty":3,"notes":""},
    {"id":15,"comboName":"J強P>屈強P>強スピン>弱ライノ>強昇竜","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":2840,"plusFrame":22,"saGain":0.5,"driveGain":2.7,"carry":1,"okizeme":3,"difficulty":3,"notes":""},
    {"id":16,"comboName":"J強P>屈強P>強スピン>中ライノ>SA3","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":3,"driveCost":1,"damage":4600,"plusFrame":0,"saGain":0.38,"driveGain":4.2,"carry":2,"okizeme":4,"difficulty":1,"notes":""},
    {"id":17,"comboName":"J強P>屈強P>強スピン>ラッシュ屈中P>中ムーングライド","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":2,"damage":2626,"plusFrame":42,"saGain":0.46,"driveGain":1.3,"carry":1,"okizeme":4,"difficulty":3,"notes":""},
    {"id":18,"comboName":"J強P>屈強P>強スピン>弱ライノ>OD昇竜","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":2880,"plusFrame":25,"saGain":0.48,"driveGain":2.1,"carry":1,"okizeme":3,"difficulty":3,"notes":""},
    {"id":19,"comboName":"J強P>屈強P>強スピン>ODライノ>SA1>強昇竜","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":3,"damage":3120,"plusFrame":0,"saGain":0.4,"driveGain":1.8,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":20,"comboName":"J強P>屈強P>強スピン>遅らせODライノ>SA2","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":2,"driveCost":3,"damage":3720,"plusFrame":25,"saGain":0.4,"driveGain":1.6,"carry":1,"okizeme":3,"difficulty":2,"notes":""},
    {"id":21,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~リンクス~強化ハーベスト>中ライノ>SA3","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":3,"driveCost":4,"damage":4979,"plusFrame":0,"saGain":0.53,"driveGain":2.5,"carry":2,"okizeme":4,"difficulty":1,"notes":""},
    {"id":22,"comboName":"J強P>屈強P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":3,"driveCost":4,"damage":4780,"plusFrame":0,"saGain":0.55,"driveGain":2.8,"carry":2,"okizeme":4,"difficulty":1,"notes":"スタン時にDゲージ0.1本でも可能"},
    {"id":23,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~リンクス~強化ハーベスト>ODライノ>SA1>強昇竜","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":6,"damage":3563,"plusFrame":0,"saGain":0.57,"driveGain":1,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":24,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~リンクス~強化ハーベスト>遅らせODライノ>SA2","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":2,"driveCost":6,"damage":4099,"plusFrame":0,"saGain":0.57,"driveGain":1,"carry":2,"okizeme":5,"difficulty":1,"notes":""},
    {"id":25,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>DR>屈強P>DR>強P~強P>中スピン~リンクス~強化ハーベスト>中ライノ>SA3","starter":"J強P","hitCondition":"スタン","targetState":"指定なし","position":"画面端","saCost":3,"driveCost":6,"damage":5102,"plusFrame":0,"saGain":0.88,"driveGain":2.5,"carry":2,"okizeme":4,"difficulty":1,"notes":"Dゲージ6本からインパクトしてスタンさせ、スタン後歩いてDゲージ回収する必要あり"},
    {"id":26,"comboName":"J強P>屈強P>強スピン>中ライノ","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":3280,"saGain":0.38,"driveGain":2.1,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":3,"notes":"深めの飛び込み時に可能"},
    {"id":27,"comboName":"J強P>屈強P>弱リンク~ハーベスト>SA1>強昇竜","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":3960,"saGain":0.31,"driveGain":2.5,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":"深めの飛び込み時に可能"},
    {"id":28,"comboName":"J強P>中P>SA1>強昇竜","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":3360,"saGain":0.15,"driveGain":1.6,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":29,"comboName":"J強P>強P~強P>SA2","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":0,"damage":4200,"saGain":0.3,"driveGain":2.2,"plusFrame":25,"carry":2,"okizeme":1,"difficulty":3,"notes":"J強P低めで当てる必要あり(猶予4F)。パニカン時は常にコンボ可能"},
    {"id":30,"comboName":"J強P>強P~強P>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":0,"damage":5040,"saGain":0.3,"driveGain":3.2,"plusFrame":24,"carry":2,"okizeme":1,"difficulty":3,"notes":"J強P低めで当てる必要あり(猶予4F)。パニカン時は常にコンボ可能"},
    {"id":31,"comboName":"J強P>屈強P>弱リンク~ハーベスト>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":0,"damage":5120,"saGain":0.6,"driveGain":3.3,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":2,"notes":""},
    {"id":32,"comboName":"J強P>強P~強P>ODライノ","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3080,"saGain":0.42,"driveGain":1.2,"plusFrame":42,"carry":3,"okizeme":2,"difficulty":3,"notes":"J強P低めで当てる必要あり(猶予4F)。パニカン時は常にコンボ可能"},
    {"id":33,"comboName":"J強P>屈中P>ODスピン>中ライノ","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2920,"saGain":0.34,"driveGain":0.7,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":2,"notes":""},
    {"id":34,"comboName":"J強P>強P~強P>ODライノ>SA2","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":2,"damage":4480,"saGain":0.42,"driveGain":1.3,"plusFrame":25,"carry":2,"okizeme":1,"difficulty":3,"notes":"J強P低めで当てる必要あり(猶予4F)。パニカン時は常にコンボ可能"},
    {"id":35,"comboName":"J強P>強P~強P>ODライノ>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":2,"damage":5080,"saGain":0.42,"driveGain":2.8,"plusFrame":24,"carry":3,"okizeme":1,"difficulty":3,"notes":"J強P低めで当てる必要あり(猶予4F)。パニカン時は常にコンボ可能"},
    {"id":36,"comboName":"J強P>屈強P>ラッシュキャンセル>屈大P>屈中P>大ライノ","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":3161,"saGain":0.44,"driveGain":0.8,"plusFrame":39,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":37,"comboName":"J強P>屈中P>DR>中K>屈強P>強スピン>中ライノ","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":3232,"saGain":0.49,"driveGain":0.5,"plusFrame":37,"carry":4,"okizeme":1,"difficulty":2,"notes":""},
    {"id":38,"comboName":"J強P>屈強P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":3,"damage":5820,"saGain":0.55,"driveGain":2.8,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":""},
    {"id":39,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ODライノ>SA2","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":4,"damage":4800,"saGain":0.38,"driveGain":1.2,"plusFrame":25,"carry":3,"okizeme":1,"difficulty":3,"notes":"深めの飛び込み時に可能"},
    {"id":40,"comboName":"J強P>屈中P>DR>中K>屈強P>強スピン>ラッシュ屈中P>強ライノ>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":4,"damage":5353,"saGain":0.55,"driveGain":2,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":3,"notes":""},
    {"id":41,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>DR>屈強P>DR>屈強P>中スピン~リンクス~強化ハーベスト>中ライノ>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":3,"driveCost":6,"damage":6214,"saGain":0.84,"driveGain":2.5,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":1,"notes":""},
    {"id":42,"comboName":"J強P>屈強P>ラッシュキャンセル>屈強P>屈中P>ラッシュキャンセル>屈強P>屈中P>大ライノ>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":5600,"saGain":0.6,"driveGain":2.3,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":3,"notes":""},
    {"id":43,"comboName":"J強P>屈強P>DR>中K>屈強P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":5820,"saGain":0.7,"driveGain":2.3,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":"Dゲージ4本から可能"},
    {"id":44,"comboName":"J強P>屈中P>DR>中K>屈強P>DR>中K>屈強P>強スピン>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":5211,"saGain":0.56,"driveGain":2,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":""},
    {"id":45,"comboName":"J強P>屈中P>DR>中K>屈強P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":5557,"saGain":0.66,"driveGain":2,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":"Dゲージ4本から可能"},
    {"id":46,"comboName":"J中K>屈強P>強スピン>中ライノ","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2980,"saGain":0.33,"driveGain":2,"plusFrame":37,"carry":3,"okizeme":2,"difficulty":3,"notes":""},
    {"id":47,"comboName":"J中K>屈強P>強スピン>弱ライノ>強昇竜","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":0,"damage":3480,"saGain":0.45,"driveGain":2.5,"plusFrame":22,"carry":2,"okizeme":4,"difficulty":3,"notes":""},
    {"id":48,"comboName":"J中K>屈強P>弱リンク~ハーベスト>SA1>強昇竜","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":3660,"saGain":0.21,"driveGain":2.3,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":2,"notes":""},
    {"id":49,"comboName":"J中K>屈強P>弱リンク~ハーベスト>ODライノ>SA2","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":2,"damage":4260,"saGain":0.33,"driveGain":1.3,"plusFrame":25,"carry":3,"okizeme":1,"difficulty":4,"notes":""},
    {"id":50,"comboName":"J中K>屈強P>ラッシュキャンセル>屈大P>屈中P>大ライノ","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":2861,"saGain":0.39,"driveGain":0.7,"plusFrame":39,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":51,"comboName":"J中K>屈中K>強P>ラッシュキャンセル>屈大P>屈中P>大ライノ","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":2744,"saGain":0.45,"driveGain":0.9,"plusFrame":39,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":52,"comboName":"J中K>屈強P>強スピン>ラッシュ屈中P>ODムーングライド>SA2","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":3,"damage":4396,"saGain":0.53,"driveGain":1.2,"plusFrame":25,"carry":5,"okizeme":1,"difficulty":4,"notes":""},
    {"id":53,"comboName":"J中K>屈強P>ODリンク～強化レオパード>ODライノ＞SA2","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":4,"damage":4500,"saGain":0.33,"driveGain":1,"plusFrame":25,"carry":3,"okizeme":1,"difficulty":4,"notes":""},
    {"id":54,"comboName":"J中K>屈強P>ラッシュキャンセル>屈大P>屈中P>ラッシュキャンセル>屈大P>屈中P>大ライノ>SA3","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":5300,"saGain":0.55,"driveGain":2.2,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":1,"notes":""},
    {"id":55,"comboName":"J中K>屈中K>強P>ラッシュキャンセル>屈大P>屈中P>ラッシュキャンセル>屈大P>屈中P>大ライノ>SA3","starter":"J中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":5063,"saGain":0.57,"driveGain":2.1,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":1,"notes":""},
    {"id":56,"comboName":"DI>屈中P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>弱昇竜","starter":"インパクト","hitCondition":"ガード","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":2808,"saGain":0.45,"driveGain":1.7,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":3,"notes":""},
    {"id":57,"comboName":"DI>屈中P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"インパクト","hitCondition":"ガード","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":2888,"saGain":0.45,"driveGain":1.7,"plusFrame":25,"carry":1,"okizeme":3,"difficulty":3,"notes":""},
    {"id":58,"comboName":"DI>強P~強P>ラッシュ屈強P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>弱昇竜","starter":"インパクト","hitCondition":"ガード","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":2,"damage":3124,"saGain":0.69,"driveGain":0.4,"plusFrame":39,"carry":1,"okizeme":4,"difficulty":3,"notes":""},
    {"id":59,"comboName":"DI>強P~強P>ラッシュ屈強P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"インパクト","hitCondition":"ガード","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":2,"damage":3178,"saGain":0.69,"driveGain":0.4,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":3,"notes":""},
    {"id":60,"comboName":"DI>強P~強P>ラッシュ屈強P>強スピン>中ライノ>ODライノ>SA2","starter":"インパクト","hitCondition":"ガード","targetState":"指定なし","position":"画面端","saCost":2,"driveCost":4,"damage":4044,"saGain":0.6,"driveGain":0.4,"plusFrame":25,"carry":1,"okizeme":1,"difficulty":3,"notes":""},
    {"id":61,"comboName":"DI>強P~強P>ラッシュ屈強P>ODリンク~強化ハーベスト>弱ライノ>ODライノ>SA2","starter":"インパクト","hitCondition":"ガード","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":6,"damage":4207,"saGain":0.61,"driveGain":0.4,"plusFrame":25,"carry":1,"okizeme":1,"difficulty":3,"notes":""},
    {"id":62,"comboName":"DI>膝崩れに屈中P>中スピン~弱リンクス~強化ハーベスト>弱ライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":3190,"saGain":0.35,"driveGain":1.2,"plusFrame":39,"carry":3,"okizeme":4,"difficulty":2,"notes":""},
    {"id":63,"comboName":"DI>膝崩れに屈中P>中スピン~弱リンクス~強化ハーベスト>中ライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":3240,"saGain":0.35,"driveGain":1.2,"plusFrame":36,"carry":3,"okizeme":5,"difficulty":2,"notes":""},
    {"id":64,"comboName":"DI>膝崩れに強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>弱ライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3435,"saGain":0.55,"driveGain":0.4,"plusFrame":39,"carry":4,"okizeme":4,"difficulty":2,"notes":""},
    {"id":65,"comboName":"DI>膝崩れに強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>中ライノ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3460,"saGain":0.55,"driveGain":0.4,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":2,"notes":""},
    {"id":66,"comboName":"ムーングライド>ムーングライド派生","starter":"ムーングライド","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":1400,"saGain":0.16,"driveGain":0.7,"plusFrame":39,"carry":2,"okizeme":3,"difficulty":2,"notes":""},
    {"id":67,"comboName":"中or強ムーングライド>中K~強K>強ライノ","starter":"ムーングライド","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2690,"saGain":0.3,"driveGain":1.3,"plusFrame":37,"carry":2,"okizeme":2,"difficulty":3,"notes":""},
    {"id":68,"comboName":"中or強ムーングライド>中K~強K>ODスピン～強化ハーベスト>中ライノ","starter":"ムーングライド","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3330,"saGain":0.5,"driveGain":1.3,"plusFrame":36,"carry":3,"okizeme":2,"difficulty":3,"notes":""},
    {"id":69,"comboName":"ラッシュ6中P>中K~強K>中スピン","starter":"ラッシュ6中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":2120,"saGain":0.29,"driveGain":0.6,"plusFrame":43,"carry":4,"okizeme":4,"difficulty":3,"notes":""},
    {"id":70,"comboName":"ラッシュ6中P>中K~強K>ODスピン~弱リンクス~強化ハーベスト>中ライノ","starter":"ラッシュ6中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":2970,"saGain":0.48,"driveGain":0.9,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":3,"notes":""},
    {"id":71,"comboName":"ラッシュ屈中K>中K~強K>中スピン","starter":"ラッシュ屈中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":1880,"saGain":0.19,"driveGain":0.4,"plusFrame":43,"carry":4,"okizeme":4,"difficulty":3,"notes":""},
    {"id":72,"comboName":"ラッシュ屈中K>中P~中P>中スピン","starter":"ラッシュ屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":1,"damage":1960,"saGain":0.28,"driveGain":0.6,"plusFrame":42,"carry":3,"okizeme":4,"difficulty":3,"notes":""},
    {"id":73,"comboName":"ラッシュ屈中K>中P~中P>弱ムーングライド","starter":"ラッシュ屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":1,"damage":2140,"saGain":0.28,"driveGain":0.5,"plusFrame":39,"carry":3,"okizeme":4,"difficulty":3,"notes":""},
    {"id":74,"comboName":"ラッシュ屈中K>中K~強K>ODスピン~弱リンクス~強化ハーベスト>中ライノ","starter":"ラッシュ屈中K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":2520,"saGain":0.47,"driveGain":0.9,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":3,"notes":""},
    {"id":75,"comboName":"強K>ODライノ","starter":"強K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2280,"saGain":0.22,"driveGain":0.5,"plusFrame":39,"carry":3,"okizeme":4,"difficulty":2,"notes":""},
    {"id":76,"comboName":"強K>ODライノ>SA2","starter":"強K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":2,"damage":4240,"saGain":0.22,"driveGain":0.5,"plusFrame":14,"carry":3,"okizeme":3,"difficulty":2,"notes":""},
    {"id":77,"comboName":"強K>ODライノ>SA3","starter":"強K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":2,"damage":4680,"saGain":0.22,"driveGain":2.1,"plusFrame":24,"carry":3,"okizeme":1,"difficulty":2,"notes":""},
    {"id":78,"comboName":"強P~強P>SA1>強昇竜","starter":"強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":3560,"saGain":0.22,"driveGain":0,"plusFrame":23,"carry":3,"okizeme":3,"difficulty":3,"notes":"中央は強Pが遠目だとつながらず"},
    {"id":79,"comboName":"強P~強P>SA2","starter":"強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":0,"damage":3860,"saGain":0.2,"driveGain":1.2,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":80,"comboName":"強P~強P>SA3","starter":"強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":0,"damage":4800,"saGain":0.2,"driveGain":2.9,"plusFrame":24,"carry":3,"okizeme":2,"difficulty":3,"notes":"中央は強Pが遠目だとつながらず"},
    {"id":81,"comboName":"強P~強P>ODライノ","starter":"強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2560,"saGain":0.32,"driveGain":0.9,"plusFrame":42,"carry":3,"okizeme":4,"difficulty":3,"notes":""},
    {"id":82,"comboName":"強P~強P>ODライノ>SA2","starter":"強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":2,"damage":4240,"saGain":0.32,"driveGain":0.9,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":83,"comboName":"強P~強P>ODライノ>SA3","starter":"強P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":2,"damage":4560,"saGain":0.32,"driveGain":2.5,"plusFrame":24,"carry":3,"okizeme":1,"difficulty":3,"notes":""},
    {"id":84,"comboName":"強P~強P>中スピン~弱リンクス~強化ハーベスト>中ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":3870,"saGain":0.49,"driveGain":2.5,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":5,"notes":"空中パニカン限定, 猶予1F?"},
    {"id":85,"comboName":"強P>中スピン~弱リンクス~強化ハーベスト>中ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":0,"damage":3440,"saGain":0.39,"driveGain":2.1,"plusFrame":36,"carry":3,"okizeme":2,"difficulty":4,"notes":"空中パニカン時限定、妥協"},
    {"id":86,"comboName":"強P~強P>弱スピン~弱リンクス~強化ハーベスト>中ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":3870,"saGain":0.49,"driveGain":2.5,"plusFrame":36,"carry":3,"okizeme":2,"difficulty":4,"notes":"空中パニカン時限定、強Pタゲコン高めにヒット時"},
    {"id":87,"comboName":"強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>弱ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":3647,"saGain":0.5,"driveGain":0.9,"plusFrame":39,"carry":4,"okizeme":4,"difficulty":3,"notes":""},
    {"id":88,"comboName":"強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>中ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":3689,"saGain":0.5,"driveGain":0.9,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":3,"notes":""},
    {"id":89,"comboName":"強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>弱昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":1,"damage":3897,"saGain":0.6,"driveGain":0.9,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":3,"notes":""},
    {"id":90,"comboName":"強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":1,"damage":3947,"saGain":0.6,"driveGain":0.9,"plusFrame":25,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":91,"comboName":"強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>弱昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":1,"damage":3945,"saGain":0.62,"driveGain":0.9,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":3,"notes":""},
    {"id":92,"comboName":"強P~強P>ラッシュ屈強P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>弱昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":4033,"saGain":0.64,"driveGain":0.9,"plusFrame":39,"carry":1,"okizeme":4,"difficulty":3,"notes":""},
    {"id":93,"comboName":"強P~強P>ラッシュ屈強P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":4083,"saGain":0.64,"driveGain":0.9,"plusFrame":26,"carry":1,"okizeme":3,"difficulty":3,"notes":""},
    {"id":94,"comboName":"強P~強P>ラッシュ屈強P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>強昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":4133,"saGain":0.66,"driveGain":0.9,"plusFrame":23,"carry":1,"okizeme":3,"difficulty":3,"notes":""},
    {"id":95,"comboName":"強P~強P>ラッシュ屈強P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>弱昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":4081,"saGain":0.66,"driveGain":0.9,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":3,"notes":""},
    {"id":96,"comboName":"強P~強P>ラッシュ屈強P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>中昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":4149,"saGain":0.66,"driveGain":0.9,"plusFrame":25,"carry":1,"okizeme":3,"difficulty":3,"notes":""},
    {"id":97,"comboName":"強P~強P>ラッシュ屈強P>強ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":2540,"saGain":0.3,"driveGain":0.9,"plusFrame":25,"carry":4,"okizeme":4,"difficulty":2,"notes":"入れ替え、前ステップで+5シミー可能"},
    {"id":98,"comboName":"強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>SA1>強昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":1,"damage":4035,"saGain":0.42,"driveGain":0.9,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":4,"notes":""},
    {"id":99,"comboName":"強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>SA2","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":1,"damage":4361,"saGain":0.42,"driveGain":0.9,"plusFrame":25,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":100,"comboName":"強P~強P>ラッシュ屈中P>中スピン~弱リンクス~強化ハーベスト>中ライノ>SA3","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":1,"damage":5689,"saGain":0.5,"driveGain":2.4,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":""},
    {"id":101,"comboName":"強P~強P>ODスピン~弱リンクス~強化ハーベスト>中ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3620,"saGain":0.49,"driveGain":1.4,"plusFrame":36,"carry":4,"okizeme":2,"difficulty":3,"notes":"空中パニカン時限定、強Pタゲコン低めにヒット時のリカバリ"},
    {"id":102,"comboName":"強スピン～強化ハーベスト>SA1>強昇竜","starter":"強スピン","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":4220,"saGain":0.21,"driveGain":2.1,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":2,"notes":""},
    {"id":103,"comboName":"強スピン～強化ハーベスト>SA1>弱ライノ","starter":"強スピン","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":4070,"saGain":0.21,"driveGain":2.1,"plusFrame":36,"carry":3,"okizeme":2,"difficulty":2,"notes":""},
    {"id":104,"comboName":"強スピン～強化ハーベスト>SA2","starter":"強スピン","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":0,"damage":4500,"saGain":0.21,"driveGain":2.1,"plusFrame":25,"carry":3,"okizeme":1,"difficulty":2,"notes":""},
    {"id":105,"comboName":"強スピン～強化ハーベスト>SA3","starter":"強スピン","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":0,"damage":5460,"saGain":0.21,"driveGain":3.1,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":2,"notes":""},
    {"id":106,"comboName":"強スピン~弱リンクス~強化ハーベスト>中ライノ","starter":"強スピン","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":3220,"saGain":0.29,"driveGain":1.7,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":4,"notes":""},
    {"id":107,"comboName":"強スピン~弱リンクス~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>弱昇竜","starter":"強スピン","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":4093,"saGain":0.58,"driveGain":1.2,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":2,"notes":""},
    {"id":108,"comboName":"強スピン~弱リンクス~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"強スピン","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":4143,"saGain":0.58,"driveGain":1.2,"plusFrame":25,"carry":1,"okizeme":3,"difficulty":2,"notes":""},
    {"id":109,"comboName":"強スピン~弱リンクス~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>弱昇竜","starter":"強スピン","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":1,"damage":4141,"saGain":0.6,"driveGain":1.2,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":2,"notes":""},
    {"id":110,"comboName":"強化ハーベスト>遅らせ強昇竜","starter":"強化ハーベスト","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2280,"saGain":0.23,"driveGain":0.6,"plusFrame":24,"carry":1,"okizeme":1,"difficulty":2,"notes":""},
    {"id":111,"comboName":"強化ハーベスト>中ライノ","starter":"強化ハーベスト","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2140,"saGain":0.19,"driveGain":0.6,"plusFrame":36,"carry":3,"okizeme":2,"difficulty":1,"notes":""},
    {"id":112,"comboName":"強化ハーベスト>SA1>強昇竜","starter":"強化ハーベスト","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":2,"damage":2940,"saGain":0.11,"driveGain":0.9,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":2,"notes":""},
    {"id":113,"comboName":"強化ハーベスト>中ライノ>SA3","starter":"強化ハーベスト","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":2,"damage":4140,"saGain":0.19,"driveGain":2.3,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":3,"notes":""},
    {"id":114,"comboName":"強化ハーベスト>ODライノ>強昇竜","starter":"強化ハーベスト","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":4,"damage":2560,"saGain":0.35,"driveGain":0.6,"plusFrame":22,"carry":2,"okizeme":1,"difficulty":2,"notes":"入れ替え"},
    {"id":115,"comboName":"強化ハーベスト>遅らせODライノ>SA2","starter":"強化ハーベスト","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":4,"damage":3540,"saGain":0.23,"driveGain":0.5,"plusFrame":25,"carry":3,"okizeme":1,"difficulty":3,"notes":""},
    {"id":116,"comboName":"強化ハーベスト>ODライノ>OD昇竜","starter":"強化ハーベスト","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":6,"damage":2660,"saGain":0.33,"driveGain":0.4,"plusFrame":25,"carry":2,"okizeme":1,"difficulty":2,"notes":"入れ替え"},
    {"id":117,"comboName":"強化マレット>屈弱P×3>弱スピン","starter":"強化マレット","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2080,"saGain":0.39,"driveGain":1.7,"plusFrame":34,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":118,"comboName":"強化マレット>中K~強K>ODスピン~リンクス~強化ハーベスト>弱ライノ","starter":"強化マレット","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3090,"saGain":0.61,"driveGain":1.5,"plusFrame":40,"carry":4,"okizeme":4,"difficulty":2,"notes":""},
    {"id":119,"comboName":"強化マレット>屈中P>ODムーングライド>SA2","starter":"強化マレット","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":2,"damage":4156,"saGain":0.48,"driveGain":0.8,"plusFrame":0,"carry":2,"okizeme":5,"difficulty":4,"notes":""},
    {"id":120,"comboName":"強化レオパード>ODライノ","starter":"強化レオパード","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2400,"saGain":0.18,"driveGain":0.4,"plusFrame":39,"carry":4,"okizeme":4,"difficulty":3,"notes":""},
    {"id":121,"comboName":"屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>弱昇竜","starter":"屈強P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3333,"saGain":0.58,"driveGain":0.7,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":3,"notes":""},
    {"id":122,"comboName":"屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"屈強P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3367,"saGain":0.58,"driveGain":0.7,"plusFrame":25,"carry":1,"okizeme":3,"difficulty":3,"notes":""},
    {"id":123,"comboName":"屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>弱昇竜","starter":"屈強P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3379,"saGain":0.6,"driveGain":0.7,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":3,"notes":""},
    {"id":124,"comboName":"屈弱P>中K~強K>ODスピン~強化ハーベスト>中ライノ","starter":"屈弱P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2280,"saGain":0.44,"driveGain":1,"plusFrame":36,"carry":3,"okizeme":2,"difficulty":2,"notes":""},
    {"id":125,"comboName":"屈弱P×2>弱P>弱スピン~各種派生","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":1110,"saGain":0.15,"driveGain":0.6,"plusFrame":0,"carry":3,"okizeme":3,"difficulty":5,"notes":""},
    {"id":126,"comboName":"屈弱P×2>弱K>弱ライノ>中昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":0,"damage":1890,"saGain":0.24,"driveGain":1.2,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":127,"comboName":"屈弱P×2>弱K>弱ライノ>SA3","starter":"屈弱P","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":3,"driveCost":0,"damage":3410,"saGain":0.17,"driveGain":2.8,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":3,"notes":""},
    {"id":128,"comboName":"屈弱P×2>弱K>弱ライノ>OD昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":2,"damage":2050,"saGain":0.24,"driveGain":0.7,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":129,"comboName":"屈弱P×2>DR>屈弱P>屈強P>弱リンク~ハーベスト>SA1>強昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":3,"damage":2749,"saGain":0.25,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":3,"notes":""},
    {"id":130,"comboName":"屈弱P×2>DR>屈弱P>屈強P>強スピン>SA2","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":3,"damage":2749,"saGain":0.29,"driveGain":0.2,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":131,"comboName":"屈弱P>屈強P>強スピン>中ライノ","starter":"屈弱P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2440,"saGain":0.31,"driveGain":1.9,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":2,"notes":""},
    {"id":132,"comboName":"屈弱P>屈中K~強K>強ライノ","starter":"屈弱P","hitCondition":"パニッシュカウンター","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":1900,"saGain":0.23,"driveGain":1,"plusFrame":39,"carry":3,"okizeme":2,"difficulty":2,"notes":""},
    {"id":133,"comboName":"屈弱P>中P>SA1>強昇竜","starter":"屈弱P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":2480,"saGain":0.08,"driveGain":1.4,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":134,"comboName":"屈中K~大K>大ライノ","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":1830,"saGain":0.14,"driveGain":0.8,"plusFrame":39,"carry":3,"okizeme":4,"difficulty":3,"notes":""},
    {"id":135,"comboName":"屈中K~大K>大ライノ>中昇竜","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":0,"damage":2430,"saGain":0.24,"driveGain":1.3,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":136,"comboName":"屈中K~大K>大ライノ>ODスクラッチホイール","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":2,"damage":2630,"saGain":0.24,"driveGain":0.8,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":137,"comboName":"屈中K~強K>DR>中K>屈強P>強スピン>中ライノ","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":3,"damage":2427,"saGain":0.45,"driveGain":0.5,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":4,"notes":""},
    {"id":138,"comboName":"屈中K~強K>DR>屈強P>弱リンク~ハーベスト>SA1>強昇竜","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":1,"driveCost":3,"damage":2701,"saGain":0.28,"driveGain":0.5,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":139,"comboName":"屈中P>強スピン>中ライノ","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2760,"saGain":0.24,"driveGain":1.5,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":1,"notes":""},
    {"id":140,"comboName":"屈中P>強スピン>弱ライノ>弱昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":0,"damage":3190,"saGain":0.34,"driveGain":1.9,"plusFrame":36,"carry":2,"okizeme":5,"difficulty":2,"notes":""},
    {"id":141,"comboName":"屈中P>強スピン>弱ライノ>強昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":0,"damage":3390,"saGain":0.36,"driveGain":2,"plusFrame":22,"carry":2,"okizeme":4,"difficulty":2,"notes":"強スピン終了時点で画面端に到達する必要あり"},
    {"id":142,"comboName":"屈中P>弱リンク～ハーベスト>SA1>強昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":1,"damage":3580,"saGain":0.17,"driveGain":1.9,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":143,"comboName":"屈中P>ODリンク~強化レオパード>ODライノ>強昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":4,"damage":3720,"saGain":0.36,"driveGain":0.6,"plusFrame":23,"carry":2,"okizeme":4,"difficulty":2,"notes":""},
    {"id":144,"comboName":"屈中P>ODリンク~強化レオパード>ODライノ>SA2","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":4,"damage":4560,"saGain":0.24,"driveGain":0.5,"plusFrame":25,"carry":4,"okizeme":1,"difficulty":2,"notes":""},
    {"id":145,"comboName":"屈中P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>遅らせODライノ>SA2","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":5,"damage":4561,"saGain":0.45,"driveGain":0.7,"plusFrame":25,"carry":5,"okizeme":1,"difficulty":4,"notes":""},
    {"id":146,"comboName":"屈中P>DR>中K>屈強P>強スピン>ODライノ>SA1>強昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":5,"damage":3265,"saGain":0.43,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":"入れ替え、ODライノ→SA1は236214Kで可能"},
    {"id":147,"comboName":"屈中P>DR>屈強P>ODリンク~強化ハーベスト>SA1>強昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":6,"damage":3557,"saGain":0.27,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":4,"notes":"4本から可能"},
    {"id":148,"comboName":"屈中P>DR>屈強P>ODリンク~強化ハーベスト>SA2","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":6,"damage":3812,"saGain":0.27,"driveGain":0.2,"plusFrame":25,"carry":4,"okizeme":3,"difficulty":2,"notes":"4本から可能"},
    {"id":149,"comboName":"屈中P>DR>中K>屈強P>強スピン>ラッシュ屈中P>ODムーン>SA2","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":6,"damage":4196,"saGain":0.59,"driveGain":0.2,"plusFrame":25,"carry":5,"okizeme":1,"difficulty":3,"notes":""},
    {"id":150,"comboName":"屈中P>DR>屈強P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":4872,"saGain":0.35,"driveGain":1.7,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":"4本から可能"},
    {"id":151,"comboName":"弱K>DR>中K>屈強P>強スピン>中ライノ","starter":"弱K","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":2192,"saGain":0.36,"driveGain":0.1,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":2,"notes":""},
    {"id":152,"comboName":"弱K>中K~強K>強ライノ","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":1820,"saGain":0.23,"driveGain":1,"plusFrame":36,"carry":2,"okizeme":2,"difficulty":3,"notes":""},
    {"id":153,"comboName":"弱K>ODスピン>中ライノ","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":1880,"saGain":0.21,"driveGain":0.3,"plusFrame":37,"carry":3,"okizeme":2,"difficulty":2,"notes":""},
    {"id":154,"comboName":"弱K>ODライノ>SA1>強昇竜","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":2,"damage":2640,"saGain":0.15,"driveGain":0.3,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":155,"comboName":"弱K>ODスピン>ラッシュ屈中P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":5,"damage":4420,"saGain":0.38,"driveGain":1.6,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":""},
    {"id":156,"comboName":"中P~中P>弱ムーングライド","starter":"中P","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":2060,"saGain":0.28,"driveGain":1.2,"plusFrame":39,"carry":2,"okizeme":3,"difficulty":2,"notes":""},
    {"id":157,"comboName":"中P>SA1>強昇竜","starter":"中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":3060,"saGain":0.05,"driveGain":1.3,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":2,"notes":""},
    {"id":158,"comboName":"強K>屈強K","starter":"強K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":1980,"saGain":0.2,"driveGain":1,"plusFrame":37,"carry":2,"okizeme":2,"difficulty":2,"notes":""},
    {"id":159,"comboName":"強K>強昇竜","starter":"強K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":0,"damage":2480,"saGain":0.22,"driveGain":1.1,"plusFrame":22,"carry":1,"okizeme":2,"difficulty":3,"notes":"距離が離れるとカス当てとなり、ダメージとフレームが変わる"},
    {"id":160,"comboName":"強K>SA1>強昇竜","starter":"強K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":0,"damage":3540,"saGain":0.1,"driveGain":1.6,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":"中央でも密着ならつながるが、差し返しではほぼ不可能"},
    {"id":161,"comboName":"強K>SA2","starter":"強K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":0,"damage":3880,"saGain":0.1,"driveGain":1.6,"plusFrame":25,"carry":2,"okizeme":1,"difficulty":2,"notes":""},
    {"id":162,"comboName":"強K>屈弱P>弱スピン","starter":"強K","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2100,"saGain":0.23,"driveGain":1.3,"plusFrame":34,"carry":2,"okizeme":2,"difficulty":3,"notes":""},
    {"id":163,"comboName":"屈中K>中K～強K>強ライノ","starter":"屈中K","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2180,"saGain":0.26,"driveGain":1.2,"plusFrame":37,"carry":2,"okizeme":2,"difficulty":2,"notes":""},
    {"id":164,"comboName":"屈中K>中K～強K>ODライノ>強昇竜","starter":"屈中K","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2440,"saGain":0.42,"driveGain":0.8,"plusFrame":22,"carry":5,"okizeme":1,"difficulty":4,"notes":"入れ替え"},
    {"id":165,"comboName":"強K>弱ライノ","starter":"強K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":0,"damage":2180,"saGain":0.18,"driveGain":1,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":2,"notes":""},
    {"id":166,"comboName":"屈中P>DR>中K>屈強P>強スピン>ラッシュ屈中P>強ライノ>弱昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":4,"damage":3141,"saGain":0.55,"driveGain":0.2,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":3,"notes":"中央から0.5ブロック画面端に遠い位置まで可能"},
    {"id":167,"comboName":"DI>膝崩れに強P~強P>ラッシュ屈強P>弱スピン>弱リンクス～強化ハーベスト>中ライノ>SA3","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":2,"damage":5562,"saGain":0.89,"driveGain":1.9,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":""},
    {"id":168,"comboName":"中K>中K~強K>DR>強P~強P>ラッシュ屈中>中スピン>弱リンクス~強化ハーベスト>遅らせODライノ>SA2","starter":"中K","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":6,"damage":4405,"saGain":0.76,"driveGain":0.6,"plusFrame":25,"carry":4,"okizeme":1,"difficulty":4,"notes":""},
    {"id":169,"comboName":"DI>弱リンク～弱リンクス～強化ハーベスト>ODライノ>強昇竜","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":3260,"saGain":0.65,"driveGain":0.6,"plusFrame":23,"carry":5,"okizeme":1,"difficulty":3,"notes":"入れ替え"},
    {"id":170,"comboName":"DI>弱リンク～弱リンクス～強化ハーベスト>ODライノ>弱昇竜","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":3060,"saGain":0.63,"driveGain":0.6,"plusFrame":38,"carry":5,"okizeme":3,"difficulty":3,"notes":"入れ替え"},
    {"id":171,"comboName":"中K>強スピン>ODライノ>強昇竜","starter":"中K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":3060,"saGain":0.39,"driveGain":1.2,"plusFrame":23,"carry":4,"okizeme":1,"difficulty":4,"notes":"入れ替え"},
    {"id":172,"comboName":"中P~中P>中ライノホーン","starter":"中P","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":1960,"saGain":0.2,"driveGain":1,"plusFrame":39,"carry":2,"okizeme":2,"difficulty":2,"notes":""},
    {"id":173,"comboName":"中K>屈中K~強K>強ライノ","starter":"中K","hitCondition":"パニッシュカウンター","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":2430,"saGain":0.25,"driveGain":1.2,"plusFrame":39,"carry":2,"okizeme":2,"difficulty":3,"notes":""},
    {"id":174,"comboName":"中P>弱K>強昇竜","starter":"中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":1920,"saGain":0.2,"driveGain":0.9,"plusFrame":22,"carry":2,"okizeme":1,"difficulty":2,"notes":""},
    {"id":175,"comboName":"DI>膝崩れに屈中P>中スピン～強リンクス～弱リンクス～（起き攻め）強化マレット","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":1860,"saGain":0.46,"driveGain":0.3,"plusFrame":0,"carry":3,"okizeme":4,"difficulty":2,"notes":"入れ替え"},
    {"id":176,"comboName":"DI>後ろ投げ","starter":"インパクト","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":1,"damage":1680,"saGain":0.5,"driveGain":0.2,"plusFrame":19,"carry":5,"okizeme":2,"difficulty":2,"notes":"入れ替え"},
    {"id":177,"comboName":"（前ジャンプ中）J中P~J強P>SA2","starter":"J中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":0,"damage":3640,"saGain":0.1,"driveGain":1.4,"plusFrame":25,"carry":3,"okizeme":1,"difficulty":4,"notes":""},
    {"id":178,"comboName":"（前ジャンプ中）J中P~J強P>SA2","starter":"J中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":2,"driveCost":0,"damage":3640,"saGain":0.1,"driveGain":1.4,"plusFrame":25,"carry":1,"okizeme":1,"difficulty":4,"notes":""},
    {"id":179,"comboName":"（前ジャンプ中）J中P~J強P>SA1>強昇竜","starter":"J中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":0,"damage":3360,"saGain":0.1,"driveGain":1.5,"plusFrame":26,"carry":1,"okizeme":3,"difficulty":4,"notes":""},
    {"id":180,"comboName":"（前ジャンプ中）J中P~J強P>弱ライノ>弱昇竜","starter":"J中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":0,"damage":2880,"saGain":0.28,"driveGain":1.4,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":4,"notes":""},
    {"id":181,"comboName":"（前ジャンプ中）J中P~J強P>ODライノ","starter":"J中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2360,"saGain":0.22,"driveGain":0.4,"plusFrame":41,"carry":3,"okizeme":1,"difficulty":5,"notes":"ODライノは始動位置・高さで調整が必要\n遠めの方がクリーンヒットしやすい"},
    {"id":182,"comboName":"（前ジャンプ中）J中P~J強P>ODライノ>SA2","starter":"J中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":2,"damage":4040,"saGain":0.22,"driveGain":0.5,"plusFrame":25,"carry":4,"okizeme":1,"difficulty":5,"notes":"ODライノがカス当たりした場合3720"},
    {"id":183,"comboName":"（前ジャンプ中）J中P~J強P>SA3","starter":"J中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":3,"driveCost":0,"damage":4600,"saGain":0.1,"driveGain":2.4,"plusFrame":24,"carry":3,"okizeme":1,"difficulty":4,"notes":""},
    {"id":184,"comboName":"（前ジャンプ中）J中P~J強P>SA3","starter":"J中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":0,"damage":4600,"saGain":0.1,"driveGain":2.4,"plusFrame":24,"carry":3,"okizeme":1,"difficulty":4,"notes":""},
    {"id":185,"comboName":"（ラッシュ）6強P>屈中P>DR>屈強P>強スピン>ラッシュ屈中P>ODリンク～強化ハーベスト>中ライノ>SA3","starter":"ラッシュ6強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":5926,"saGain":0.61,"driveGain":1.9,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":5,"notes":""},
    {"id":186,"comboName":"（ラッシュ）6強P>屈中P>DR>中K>屈強P>強スピン>ラッシュ屈中P>ODリンク～強化ハーベスト>SA1>強昇竜","starter":"ラッシュ6強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":6,"damage":4285,"saGain":0.58,"driveGain":0.4,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":4,"notes":""},
    {"id":187,"comboName":"（ラッシュ）6強P>屈中P>DR>中K>屈強P>強スピン>ラッシュ屈中P>ODリンク～強化ハーベスト>SA2","starter":"ラッシュ6強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":6,"damage":4753,"saGain":0.58,"driveGain":0.4,"plusFrame":25,"carry":5,"okizeme":1,"difficulty":4,"notes":""},
    {"id":188,"comboName":"（ラッシュ）6強P>屈中P>ODスピン>ラッシュ屈中P>ODリンク～強化ハーベスト>遅らせODライノ>SA2","starter":"ラッシュ6強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":6,"damage":4860,"saGain":0.55,"driveGain":0.4,"plusFrame":25,"carry":5,"okizeme":1,"difficulty":5,"notes":""},
    {"id":189,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>DR>屈強P>中スピン~リンクス~強化ハーベスト>弱ライノ>SA1>強昇竜","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":5,"damage":4766,"plusFrame":0,"saGain":0,"driveGain":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":190,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>DR>屈強P>中スピン~リンクス~強化ハーベスト>ODライノ>SA1>強昇竜","starter":"J強P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":6,"damage":4691,"plusFrame":0,"saGain":0,"driveGain":0,"carry":0,"okizeme":0,"difficulty":0,"notes":""},
    {"id":191,"comboName":"強P~強P>ラッシュ屈強P>DR>屈強P>DR>屈強P>中スピン~弱リンクス~強化ハーベスト>中ライノ>SA3","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":3,"driveCost":6,"damage":6178,"saGain":0.79,"driveGain":2.4,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":1,"notes":""},
    {"id":192,"comboName":"強P~強P>ラッシュ屈強P>DR>屈強P>DR>屈強P>強スピン~弱リンクス~強化ハーベスト>弱ライノ>SA1>強昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":6,"damage":4684,"saGain":0.79,"driveGain":0.9,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":193,"comboName":"強P~強P>ラッシュ屈強P>DR>屈強P>DR>屈強P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>SA1>強昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":6,"damage":4805,"saGain":0.79,"driveGain":0.9,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":194,"comboName":"強P~強P>ラッシュ屈強P>DR>屈強P>DR>屈強P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>SA2","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":2,"driveCost":6,"damage":5273,"saGain":0.79,"driveGain":0.9,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":195,"comboName":"中K~強K>DR>強P~強P>ラッシュ屈強P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>弱昇竜","starter":"中K","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":4,"damage":3438,"saGain":0.79,"driveGain":0.3,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":3,"notes":""},
    {"id":196,"comboName":"中K~強K>DR>強P~強P>ラッシュ屈強P>強スピン~弱リンクス~強化ハーベスト>弱ライノ>SA1>強昇竜","starter":"中K","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":4,"damage":3824,"saGain":0.77,"driveGain":0.3,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":197,"comboName":"中K~強K>DR>強P~強P>ラッシュ屈強P>ODリンク~強化ハーベスト>SA1>強昇竜","starter":"中K","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":1,"driveCost":6,"damage":3896,"saGain":0.53,"driveGain":0.3,"plusFrame":0,"carry":2,"okizeme":3,"difficulty":1,"notes":""},
    {"id":198,"comboName":"屈中P>DR>中K>屈強P>ODスピン~強化ハーベスト>SA1>強昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":5,"damage":3442,"saGain":0.42,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":2,"notes":""},
    {"id":199,"comboName":"屈中P>DR>屈強P>ODスピン~強化ハーベスト>SA1>強昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":5,"damage":3557,"saGain":0.37,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":2,"notes":""},
    {"id":200,"comboName":"強P~強P>強ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2800,"saGain":0.28,"driveGain":1.4,"plusFrame":36,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":201,"comboName":"強P~強P>SA1>弱ライノ","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":3570,"saGain":0.2,"driveGain":1.9,"plusFrame":36,"carry":2,"okizeme":2,"difficulty":2,"notes":""},
    {"id":202,"comboName":"強P~強P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>弱昇竜","starter":"強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":0,"damage":4250,"saGain":0.67,"driveGain":3.2,"plusFrame":36,"carry":4,"okizeme":5,"difficulty":2,"notes":"空中パニカン限定, ブランカのODローリングガード時最速で安定"},
    {"id":203,"comboName":"屈弱P×2>弱K>弱ライノ>OD昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":2,"damage":2050,"saGain":0.24,"driveGain":0.7,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":204,"comboName":"屈弱P×2>DR>屈弱P>屈強P>弱リンク~ハーベスト>SA1>強昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":3,"damage":2749,"saGain":0.25,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":3,"notes":""},
    {"id":205,"comboName":"屈弱P×2>DR>屈弱P>屈強P>強スピン>SA2","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":3,"damage":2749,"saGain":0.29,"driveGain":0.2,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":206,"comboName":"屈弱P×2>DR>屈弱P>屈強P>強ライノ>SA3","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":3,"damage":3671,"saGain":0.27,"driveGain":1.7,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":3,"notes":""},
    {"id":207,"comboName":"屈弱P×2>DR>屈弱P>屈強P>強スピン>ODライノ>SA1>強昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端到達","saCost":1,"driveCost":5,"damage":2481,"saGain":0.41,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":208,"comboName":"屈弱P×2>DR>遅らせODライノ>SA2","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":5,"damage":3049,"saGain":0.41,"driveGain":0.2,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":2,"notes":""},
    {"id":209,"comboName":"屈弱P×2>DR>遅らせODライノ>SA3","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":5,"damage":3929,"saGain":0.41,"driveGain":1.7,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":3,"notes":""},
    {"id":210,"comboName":"屈弱P×2>DR>屈弱P>屈強P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>SA1>強昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":6,"damage":2652,"saGain":0.46,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":4,"notes":"4本から可能"},
    {"id":211,"comboName":"屈弱P×2>DR>屈弱P>屈強P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>SA2","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":6,"damage":3120,"saGain":0.46,"driveGain":0.2,"plusFrame":25,"carry":4,"okizeme":3,"difficulty":3,"notes":"4本から可能"},
    {"id":212,"comboName":"屈弱P×2>DR>屈弱P>屈強P>DR>強K>中K~強K>強ライノ>SA3","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":3994,"saGain":0.47,"driveGain":1.7,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":5,"notes":""},
    {"id":213,"comboName":"屈弱P×2>DR>屈弱P>屈強P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"屈弱P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":4096,"saGain":0.54,"driveGain":1.7,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":"4本から可能"},
    {"id":214,"comboName":"屈弱P>屈強P>強スピン>中ライノ","starter":"屈弱P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2440,"saGain":0.31,"driveGain":1.9,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":2,"notes":""},
    {"id":215,"comboName":"屈弱P>屈中K~強K>強ライノ","starter":"屈弱P","hitCondition":"パニッシュカウンター","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":1900,"saGain":0.23,"driveGain":1,"plusFrame":39,"carry":3,"okizeme":2,"difficulty":2,"notes":""},
    {"id":216,"comboName":"屈弱P>中P>SA1>強昇竜","starter":"屈弱P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":0,"damage":2480,"saGain":0.08,"driveGain":1.4,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":217,"comboName":"屈中K~大K>大ライノ","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":1830,"saGain":0.14,"driveGain":0.8,"plusFrame":39,"carry":3,"okizeme":4,"difficulty":3,"notes":""},
    {"id":218,"comboName":"屈中K~大K>大ライノ>中昇竜","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":0,"damage":2430,"saGain":0.24,"driveGain":1.3,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":219,"comboName":"屈中K~大K>大ライノ>ODスクラッチホイール","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":2,"damage":2630,"saGain":0.24,"driveGain":0.8,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":220,"comboName":"屈中K~強K>DR>中K>屈強P>強スピン>中ライノ","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":3,"damage":2427,"saGain":0.45,"driveGain":0.5,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":4,"notes":""},
    {"id":221,"comboName":"屈中K~強K>DR>屈強P>弱リンク~ハーベスト>SA1>強昇竜","starter":"屈中K","hitCondition":"ノーマル","targetState":"立ち限定","position":"指定なし","saCost":1,"driveCost":3,"damage":2701,"saGain":0.28,"driveGain":0.5,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":222,"comboName":"屈中P>強スピン>中ライノ","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":2760,"saGain":0.24,"driveGain":1.5,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":1,"notes":""},
    {"id":223,"comboName":"屈中P>強スピン>弱ライノ>弱昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":0,"damage":3190,"saGain":0.34,"driveGain":1.9,"plusFrame":36,"carry":2,"okizeme":5,"difficulty":2,"notes":""},
    {"id":224,"comboName":"屈中P>強スピン>弱ライノ>強昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":0,"damage":3390,"saGain":0.36,"driveGain":2,"plusFrame":22,"carry":2,"okizeme":4,"difficulty":2,"notes":"強スピン終了時点で画面端に到達する必要あり"},
    {"id":225,"comboName":"屈中P>弱リンク～ハーベスト>SA1>強昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":1,"damage":3580,"saGain":0.17,"driveGain":1.9,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":226,"comboName":"屈中P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>弱昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3853,"saGain":0.54,"driveGain":0.4,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":2,"notes":""},
    {"id":227,"comboName":"屈中P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3903,"saGain":0.54,"driveGain":0.4,"plusFrame":25,"carry":1,"okizeme":3,"difficulty":2,"notes":""},
    {"id":228,"comboName":"屈中P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>弱昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3901,"saGain":0.56,"driveGain":0.4,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":2,"notes":""},
    {"id":229,"comboName":"屈中P>ODリンク~強化レオパード>ODライノ>強昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":4,"damage":3720,"saGain":0.36,"driveGain":0.6,"plusFrame":23,"carry":2,"okizeme":4,"difficulty":2,"notes":""},
    {"id":230,"comboName":"屈中P>ODリンク~強化レオパード>ODライノ>SA2","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":4,"damage":4560,"saGain":0.24,"driveGain":0.5,"plusFrame":25,"carry":4,"okizeme":1,"difficulty":2,"notes":""},
    {"id":231,"comboName":"屈中P>強スピン>ラッシュ屈中P>ODリンク~強化ハーベスト>遅らせODライノ>SA2","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":5,"damage":4561,"saGain":0.45,"driveGain":0.7,"plusFrame":25,"carry":5,"okizeme":1,"difficulty":4,"notes":""},
    {"id":232,"comboName":"屈中P>弱ムーングライド","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":1880,"saGain":0.16,"driveGain":0.7,"plusFrame":39,"carry":2,"okizeme":3,"difficulty":4,"notes":""},
    {"id":233,"comboName":"屈中P>ODムーングライド","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":2280,"saGain":0.16,"driveGain":0.3,"plusFrame":42,"carry":2,"okizeme":3,"difficulty":4,"notes":""},
    {"id":234,"comboName":"屈中P>ODムーングライド>SA2","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":2,"damage":4096,"saGain":0.16,"driveGain":0.3,"plusFrame":0,"carry":2,"okizeme":5,"difficulty":2,"notes":""},
    {"id":235,"comboName":"屈中P>ODムーングライド>SA3","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":2,"damage":4480,"saGain":0.16,"driveGain":1.9,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":2,"notes":""},
    {"id":236,"comboName":"屈中P>DR>中K>屈強P>強スピン>弱ライノ","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"中央","saCost":0,"driveCost":3,"damage":2739,"plusFrame":38,"saGain":0.39,"driveGain":0.2,"carry":4,"okizeme":4,"difficulty":3,"notes":""},
    {"id":237,"comboName":"屈中P>DR>中K>屈強P>強スピン>中ライノ","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"中央","saCost":0,"driveCost":3,"damage":2781,"plusFrame":37,"saGain":0.39,"driveGain":0.2,"carry":4,"okizeme":4,"difficulty":3,"notes":""},
    {"id":238,"comboName":"屈中P>DR>中K>屈強P>強スピン>弱ライノ>弱昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":3,"damage":2989,"plusFrame":36,"saGain":0.49,"driveGain":0.2,"carry":4,"okizeme":5,"difficulty":3,"notes":"中央から0.5ブロック分画面端に近いと可能"},
    {"id":239,"comboName":"屈中P>DR>中K>屈強P>強スピン>弱ライノ>中昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":3,"damage":3039,"plusFrame":25,"saGain":0.49,"driveGain":0.2,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":240,"comboName":"屈中P>DR>中K>屈強P>強スピン>弱ライノ>強昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":3,"damage":3080,"plusFrame":22,"saGain":0.51,"driveGain":0.2,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":241,"comboName":"屈中P>DR>中K>屈強P>強スピン>ラッシュ屈中P>中ムーングライド","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":4,"damage":2951,"plusFrame":42,"saGain":0.47,"driveGain":0.2,"carry":4,"okizeme":4,"difficulty":3,"notes":""},
    {"id":242,"comboName":"屈中P>DR>中K>屈強P>強スピン>弱ライノ>OD昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端到達","saCost":0,"driveCost":5,"damage":3137,"plusFrame":25,"saGain":0.49,"driveGain":0.2,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":243,"comboName":"屈中P>DR>中K>屈強P>強スピン>ODライノ>SA1>強昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":5,"damage":3265,"saGain":0.43,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":"入れ替え、ODライノ→SA1は236214Kで可能"},
    {"id":244,"comboName":"屈中P>DR>屈強P>ODリンク~強化ハーベスト>SA1>強昇竜","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":6,"damage":3557,"saGain":0.27,"driveGain":0.2,"plusFrame":0,"carry":2,"okizeme":6,"difficulty":4,"notes":"4本から可能"},
    {"id":245,"comboName":"屈中P>DR>屈強P>ODリンク~強化ハーベスト>SA2","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":6,"damage":3812,"saGain":0.27,"driveGain":0.2,"plusFrame":25,"carry":4,"okizeme":3,"difficulty":2,"notes":"4本から可能"},
    {"id":246,"comboName":"屈中P>DR>中K>屈強P>強スピン>ラッシュ屈中P>ODムーン>SA2","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":2,"driveCost":6,"damage":4196,"saGain":0.59,"driveGain":0.2,"plusFrame":25,"carry":5,"okizeme":1,"difficulty":3,"notes":""},
    {"id":247,"comboName":"屈中P>DR>屈強P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":4872,"saGain":0.35,"driveGain":1.7,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":"4本から可能"},
    {"id":248,"comboName":"屈中P>DR>中K>屈強P>DR>中K>屈強P>強スピン>SA3","starter":"屈中P","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":6,"damage":4776,"saGain":0.46,"driveGain":1.7,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":3,"notes":""},
    {"id":249,"comboName":"弱K>DR>中K>屈強P>強スピン>中ライノ","starter":"弱K","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":2192,"saGain":0.36,"driveGain":0.1,"plusFrame":37,"carry":3,"okizeme":1,"difficulty":2,"notes":""},
    {"id":250,"comboName":"弱K>DR>屈弱P>屈強P>強スピン>弱ライノ","starter":"弱K","hitCondition":"ノーマル","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":3,"damage":1962,"saGain":0.34,"driveGain":0.1,"plusFrame":38,"carry":4,"okizeme":3,"difficulty":3,"notes":""},
    {"id":251,"comboName":"弱K>DR>屈弱P>屈強P>強スピン>弱ライノ>各種昇竜","starter":"弱K","hitCondition":"ノーマル","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":2132,"saGain":0.44,"driveGain":0.1,"plusFrame":0,"carry":1,"okizeme":4,"difficulty":3,"notes":""},
    {"id":252,"comboName":"弱K>中ライノ","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":1320,"saGain":0.11,"driveGain":0.7,"plusFrame":39,"carry":3,"okizeme":3,"difficulty":2,"notes":""},
    {"id":253,"comboName":"弱K>中K~強K>強ライノ","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":1820,"saGain":0.23,"driveGain":1,"plusFrame":36,"carry":2,"okizeme":2,"difficulty":3,"notes":""},
    {"id":254,"comboName":"弱K>ODライノ>強昇竜","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":2,"damage":2160,"saGain":0.27,"driveGain":0.3,"plusFrame":22,"carry":3,"okizeme":4,"difficulty":2,"notes":""},
    {"id":255,"comboName":"弱K>ODスピン>中ライノ","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":2,"damage":1880,"saGain":0.21,"driveGain":0.3,"plusFrame":37,"carry":3,"okizeme":2,"difficulty":2,"notes":""},
    {"id":256,"comboName":"弱K>ODライノ>SA1>強昇竜","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":1,"driveCost":2,"damage":2640,"saGain":0.15,"driveGain":0.3,"plusFrame":0,"carry":2,"okizeme":2,"difficulty":1,"notes":""},
    {"id":257,"comboName":"弱K>ODスピン>ラッシュ屈中P>ODリンク~強化ハーベスト>中ライノ>SA3","starter":"弱K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":3,"driveCost":5,"damage":4420,"saGain":0.38,"driveGain":1.6,"plusFrame":0,"carry":2,"okizeme":4,"difficulty":4,"notes":""},
    {"id":258,"comboName":"弱P>中P~中P>弱ムーングライド","starter":"弱P","hitCondition":"パニッシュカウンター","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":0,"damage":1900,"saGain":0.25,"driveGain":1.1,"plusFrame":39,"carry":3,"okizeme":3,"difficulty":2,"notes":""},
    {"id":259,"comboName":"弱P>中P~中P>ODライノ>強昇竜","starter":"弱P","hitCondition":"パニッシュカウンター","targetState":"立ち限定","position":"指定なし","saCost":0,"driveCost":2,"damage":2400,"saGain":0.39,"driveGain":0.9,"plusFrame":22,"carry":3,"okizeme":4,"difficulty":2,"notes":""},
    {"id":260,"comboName":"中K>弱リンク~レオパード","starter":"中K","hitCondition":"カウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":1600,"saGain":0.11,"driveGain":0.7,"plusFrame":35,"carry":2,"okizeme":1,"difficulty":2,"notes":""},
    {"id":261,"comboName":"屈中P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>弱昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3853,"saGain":0.54,"driveGain":0.4,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":2,"notes":""},
    {"id":262,"comboName":"屈中P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱ライノ>中昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3903,"saGain":0.54,"driveGain":0.4,"plusFrame":25,"carry":1,"okizeme":3,"difficulty":2,"notes":""},
    {"id":263,"comboName":"屈中P>ODリンク~強化レオパード>ラッシュ屈弱P>中スピン~弱リンクス~強化ハーベスト>弱昇竜>弱昇竜","starter":"屈中P","hitCondition":"カウンター","targetState":"指定なし","position":"画面端","saCost":0,"driveCost":3,"damage":3901,"saGain":0.56,"driveGain":0.4,"plusFrame":36,"carry":1,"okizeme":5,"difficulty":2,"notes":""},
    {"id":264,"comboName":"中K>屈強P>大スピン>中ライノ","starter":"中K","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"指定なし","saCost":0,"driveCost":0,"damage":3080,"saGain":0.33,"driveGain":2.1,"plusFrame":37,"carry":3,"okizeme":4,"difficulty":4,"notes":""},
    {"id":265,"comboName":"J強P>屈強P>ODリンク~強化レオパード>ラッシュ屈弱P>DR>屈強P>DR>屈強P>中スピン~リンクス~強化ハーベスト>中ライノ>SA3","starter":"J強P","hitCondition":"パニッシュカウンター","targetState":"指定なし","position":"画面端","saCost":3,"driveCost":6,"damage":6374,"plusFrame":0,"saGain":"Empty","driveGain":"Empty","carry":1,"okizeme":2,"difficulty":1,"notes":""},
    {"id":266,"comboName":"屈弱P×2>弱K>弱ライノ>中昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":0,"damage":1890,"saGain":0.24,"driveGain":1.2,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""},
    {"id":267,"comboName":"屈弱P×2>弱K>弱ライノ>OD昇竜","starter":"屈弱P","hitCondition":"ノーマル","targetState":"立ち限定","position":"画面端","saCost":0,"driveCost":2,"damage":2050,"saGain":0.24,"driveGain":0.7,"plusFrame":25,"carry":3,"okizeme":3,"difficulty":3,"notes":""}
];

    // ★★★【ここに oki_database.json の配列の中身を貼り付け】★★★
    // 例: const okiData = [ {"id":1, ...}, {"id":2, ...} ];
    const okiData = [
    {"id":1,"plusFrame":"24","okiMove":"ラッシュ伸ばし中K","returnValue":"ガード＋5投げ間合い、ヒット＋9屈強Pが届く","beats":"","losesTo":"","position":"中央","tech":"その場受け身","situation":"投げ後など"},
    {"id":2,"plusFrame":"24","okiMove":"ラッシュ強P","returnValue":"ガード＋4投げ間合い外、ヒット＋8屈中Pが届く","beats":"","losesTo":"","position":"中央","tech":"その場受け身","situation":"投げ後など"},
    {"id":3,"plusFrame":"24","okiMove":"ラッシュ強K","returnValue":"ガード＋2投げ間合い外、ヒット＋8中Kが届く","beats":"","losesTo":"","position":"中央","tech":"その場受け身","situation":"投げ後など"},
    {"id":4,"plusFrame":"48","okiMove":"前ステ×2>中K","returnValue":"ヒット＋8中K/屈中Kが繋がる","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":5,"plusFrame":"24","okiMove":"ラッシュ投げ","returnValue":"ビタ","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":"投げ後など"},
    {"id":6,"plusFrame":"24","okiMove":"ラッシュ伸ばし中K","returnValue":"ガード＋5以上投げ間合い","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":"投げ後など"},
    {"id":7,"plusFrame":"24","okiMove":"ラッシュ強P","returnValue":"ガード＋4投げ間合い外、ヒット＋8中Kが届く","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":"投げ後など"},
    {"id":8,"plusFrame":"24","okiMove":"ラッシュ6中K","returnValue":"起き上がり7F目にヒット","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":"投げ後など"},
    {"id":9,"plusFrame":"24","okiMove":"前ステ>中K~強K","returnValue":"前ステ時＋4","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":"投げ後など"},
    {"id":10,"plusFrame":"48","okiMove":"前ステ>ラッシュ6中K","returnValue":"","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":11,"plusFrame":"25","okiMove":"前ステ","returnValue":"＋5 シミー不可","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":12,"plusFrame":"25","okiMove":"弱K空振り>中K","returnValue":"ガード＋3、投げ間合い外、ヒット＋7","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":13,"plusFrame":"25","okiMove":"インパクト","returnValue":"","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":14,"plusFrame":"37","okiMove":"弱リンク>弱リンクス~強化レオパード","returnValue":"暴れ（最速時相打ち:+7F以上)","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":"ドライブインパクト"},
    {"id":15,"plusFrame":"31~39","okiMove":"ラッシュ6中K/屈中K","returnValue":"体感重ね","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":"3K"},
    {"id":16,"plusFrame":"31~39","okiMove":"弱リンク~マレット","returnValue":"＋39からは持続ヒットで＋4","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":"3K"},
    {"id":17,"plusFrame":"52","okiMove":"前ステ>ラッシュ6中K","returnValue":"ヒット＋8、ガード＋3","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":18,"plusFrame":"34","okiMove":"前ステ>6強P","returnValue":"ジャンプ、ステップ、暴れ","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":19,"plusFrame":"34","okiMove":"ラッシュ伸ばし6中K/屈中K","returnValue":"","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":20,"plusFrame":"34","okiMove":"屈中K空振り","returnValue":"投げ間合い内、シミ―不可","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":21,"plusFrame":"34","okiMove":"屈弱K>キャンセル屈弱P空振り>中K","returnValue":"ガードで＋4 シミ―可投げ間合い、ヒット＋8","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":22,"plusFrame":"40","okiMove":"強リンク~弱リンクス~強化レオパード","returnValue":"最速暴れ相打ち＋7 中Kが繋がる、ヒットODライノ>SA2、ガード＋1","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":"6強Ptc時"},
    {"id":23,"plusFrame":"36","okiMove":"屈弱K空振り>弱P空振り","returnValue":"＋5 シミ―不可","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":24,"plusFrame":"36","okiMove":"弱リンク>中K","returnValue":"ガード＋4 シミ―可投げ間合い、ヒット＋8","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":25,"plusFrame":"36","okiMove":"屈弱K空振り>6中K","returnValue":"ヒット＋4、ガード0","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":26,"plusFrame":"37","okiMove":"屈中K空振り>中K","returnValue":"ガード＋4、投げ間合い外、ヒット＋8","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":27,"plusFrame":"39","okiMove":"前ステ歩き投げ","returnValue":"ライノからは不可","beats":"","losesTo":"","position":"中央","tech":"指定なし","situation":""},
    {"id":28,"plusFrame":"39","okiMove":"弱リンク~マレット","returnValue":"ヒット＋4 屈弱Pが繋がる、ガード-1","beats":"","losesTo":"","position":"中央","tech":"指定なし","situation":""},
    {"id":29,"plusFrame":"39","okiMove":"弱リンク~リンクス~各種派生","returnValue":"停止時-5","beats":"","losesTo":"","position":"中央","tech":"指定なし","situation":""},
    {"id":30,"plusFrame":"22","okiMove":"弱K空振り>投げ","returnValue":"＋4 シミ―可能","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":31,"plusFrame":"39","okiMove":"強P空振り","returnValue":"シミ―可能投げ間合い","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":32,"plusFrame":"39","okiMove":"屈弱K>弱P空振り>中K","returnValue":"ガード＋4シミ―可能投げ間合い、ヒット＋8","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":33,"plusFrame":"39","okiMove":"弱K空振り>6中K","returnValue":"ヒット＋4、ガード0","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":34,"plusFrame":"39","okiMove":"弱リンク~マレット","returnValue":"ヒット＋4、ガード-1","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":35,"plusFrame":"39","okiMove":"弱リンク>ラッシュ","returnValue":"暗転返し可","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":36,"plusFrame":"37","okiMove":"ラッシュ伸ばし6中K/屈中K","returnValue":"","beats":"","losesTo":"","position":"中央","tech":"後ろ受け身","situation":""},
    {"id":37,"plusFrame":"40","okiMove":"弱リンク~リンクス~強化レオパード","returnValue":"起き上がりに重なる","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":38,"plusFrame":"40","okiMove":"弱リンク~弱リンスク停止","returnValue":"リバサ警戒","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":39,"plusFrame":"40","okiMove":"前ステ＞ラッシュ屈中K","returnValue":"ヒット＋9、ガード＋1","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":40,"plusFrame":"37","okiMove":"弱P空振り>6中K","returnValue":"ヒット＋4、ガード0","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":41,"plusFrame":"42","okiMove":"強リンク~リンクス~各種派生","returnValue":"","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":42,"plusFrame":"42","okiMove":"詐欺飛び","returnValue":"","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":43,"plusFrame":"42","okiMove":"前ステ>屈弱P空振り>中K","returnValue":"ガード＋4シミ―可能投げ間合い、ヒット＋8","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":44,"plusFrame":"36","okiMove":"弱P×2空振り","returnValue":"＋4 シミ―不可","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":45,"plusFrame":"43","okiMove":"前ステ×2","returnValue":"＋3、投げ間合い、後ろ受け身にはシミ―可能","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""},
    {"id":46,"plusFrame":"43","okiMove":"前ステ>弱K空振り","returnValue":"シミ―不可","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":47,"plusFrame":"43","okiMove":"前ステ>屈弱K空振り>中K","returnValue":"ガード＋4シミ―可能投げ間合い、ヒット＋8","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":""},
    {"id":48,"plusFrame":"36","okiMove":"中リンク>屈弱P","returnValue":"±0","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":"SA"},
    {"id":49,"plusFrame":"46","okiMove":"強リンク>中K","returnValue":"ガード＋4シミ―可能投げ間合い、ヒット＋8","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":"大足パニカン"},
    {"id":50,"plusFrame":"37","okiMove":"屈強K>屈弱P","returnValue":"±0","beats":"","losesTo":"","position":"画面端","tech":"指定なし","situation":"SA"},
    {"id":51,"plusFrame":"48","okiMove":"前ステ×2>歩き投げ","returnValue":"持続を埋めようとすると空振るので注意","beats":"","losesTo":"","position":"指定なし","tech":"指定なし","situation":""}
];


    // --- これより下のプログラムロジックには変更は不要です ---

    // --- DOM要素の取得 ---
    const getSliderAndValue = (id) => ({ slider: document.getElementById(id), value: document.getElementById(`${id}-value`) });
    const sliders = {
        damage: getSliderAndValue('damage-slider'),
        saGain: getSliderAndValue('sa-gain-slider'),
        driveGain: getSliderAndValue('drive-gain-slider'),
        carry: getSliderAndValue('carry-slider'),
        okizeme: getSliderAndValue('okizeme-slider'),
        difficulty: getSliderAndValue('difficulty-slider')
    };
    const sortInputs = {
        saGaugeInt: document.getElementById('sa-gauge-int'),
        saGaugeFloat: document.getElementById('sa-gauge-float'),
        driveGauge: document.getElementById('drive-gauge-slider'),
        driveGaugeValue: document.getElementById('drive-gauge-value'),
        starter: document.getElementById('starter-select'),
        hitCondition: document.getElementById('hit-condition-select'),
        targetState: document.getElementById('target-state-select'),
        position: document.getElementById('position-select'),
    };
    const searchButton = document.getElementById('search-button');
    const resetButton = document.getElementById('reset-button');
    const resultsArea = document.getElementById('results-area');
    const resultsBody = document.getElementById('results-body');
    const resultsCards = document.getElementById('results-cards');
    const noResults = document.getElementById('no-results');
    const okiModal = document.getElementById('oki-modal');
    const okiModalTitle = document.getElementById('oki-modal-title');
    const okiModalList = document.getElementById('oki-modal-list');
    let modalInstance;
    
    // --- フィルターの動的生成 ---
    function populateFilters() {
        const createOptions = (selectElement, key) => {
            const items = [...new Set(comboData.map(combo => combo[key]))];
            if (key === 'starter') {
                items.sort((a, b) => {
                    const keyA = getSortKeys(a);
                    const keyB = getSortKeys(b);
                    if (keyA.isFallback && !keyB.isFallback) return 1;
                    if (!keyA.isFallback && keyB.isFallback) return -1;
                    if (keyA.strength !== keyB.strength) return keyA.strength - keyB.strength;
                    if (keyA.button !== keyB.button) return keyA.button - keyB.button;
                    if (keyA.prefix !== keyB.prefix) return keyA.prefix - keyB.prefix;
                    return a.localeCompare(b);
                });
            } else {
                items.sort();
            }
            const baseOptions = Array.from(selectElement.options).map(opt => opt.value);
            const newItems = items.filter(item => item && !baseOptions.includes(item));
            newItems.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                selectElement.appendChild(option);
            });
        };
        createOptions(sortInputs.starter, 'starter');
        createOptions(sortInputs.position, 'position');
    }

    function getSortKeys(starterName) {
        let strength = 99, button = 99, prefix = 99;
        if (starterName.includes('弱')) strength = 1;
        else if (starterName.includes('中')) strength = 2;
        else if (starterName.includes('強')) strength = 3;
        if (starterName.includes('P')) button = 1;
        else if (starterName.includes('K')) button = 2;
        if (starterName.startsWith('ラッシュ')) prefix = 5;
        else if (starterName.match(/^[0-9]/) || starterName.startsWith('(')) prefix = 4;
        else if (starterName.startsWith('J')) prefix = 3;
        else if (starterName.startsWith('屈')) prefix = 2;
        else if (strength !== 99) prefix = 1;
        const isFallback = (strength === 99 || button === 99);
        return { strength, button, prefix, isFallback };
    }

    // --- イベントリスナー ---
    const setupSlider = (name) => {
        const { slider, value } = sliders[name];
        if (!slider || !value) return;
        const update = () => value.textContent = slider.value;
        slider.addEventListener('input', update);
        update();
    };
    
    resetButton.addEventListener('click', () => {
        Object.values(sliders).forEach(({ slider }) => { if(slider) slider.value = 1; });
        Object.keys(sliders).forEach(setupSlider);
        sortInputs.saGaugeInt.value = 3;
        sortInputs.saGaugeFloat.value = 0;
        sortInputs.driveGauge.value = 6;
        sortInputs.driveGaugeValue.textContent = (6.0).toFixed(1);
        sortInputs.starter.value = "any";
        sortInputs.hitCondition.value = "any";
        sortInputs.targetState.value = "any";
        sortInputs.position.value = "any";
        M.FormSelect.init(document.querySelectorAll('select'));
        resultsBody.innerHTML = '';
        resultsCards.innerHTML = '';
        noResults.textContent = '上の条件を設定して「コンボを検索」ボタンを押してください。';
        noResults.style.display = 'block';
    });

    searchButton.addEventListener('click', function() {
        runAnalysis();
    });
    
    resultsArea.addEventListener('click', (event) => {
        const targetCell = event.target.closest('.plus-frame');
        if (!targetCell) return;
        const frameValue = parseInt(targetCell.dataset.frame, 10);
        if (isNaN(frameValue)) return;
        showOkiModal(frameValue);
    });
    
    // --- 起き攻めモーダル ---
    function showOkiModal(frame) {
        okiModalTitle.textContent = `起き攻め一覧 (+${frame}F)`;
        okiModalList.innerHTML = '';
        const applicableOki = okiData.filter(oki => {
            const frameStr = oki.plusFrame.toString();
            if (frameStr.includes('~')) {
                const [min, max] = frameStr.split('~').map(Number);
                return frame >= min && frame <= max;
            } else {
                return frame === Number(frameStr);
            }
        });
        if (applicableOki.length === 0) {
            okiModalList.innerHTML = '<li class="collection-item">このフレームに対応する起き攻めデータがありません。</li>';
        } else {
            applicableOki.forEach(oki => {
                const li = document.createElement('li');
                li.className = 'collection-item avatar oki-item';
                li.innerHTML = `
                    <i class="material-icons circle green">playlist_play</i>
                    <span class="title">
                        ${oki.okiMove}
                        <span class="oki-frame-source">(${oki.plusFrame}F)</span>
                    </span>
                    <p>
                        <b>リターン:</b> ${oki.returnValue || 'N/A'}<br>
                        <b>状況:</b> ${oki.situation || 'N/A'}
                    </p>
                    <span class="secondary-content">${oki.position} / ${oki.tech}</span>
                `;
                okiModalList.appendChild(li);
            });
        }
        modalInstance.open();
    }

    // --- メインロジック ---
    function runAnalysis() {
        const weights = {};
        for (const key in sliders) { weights[key] = parseInt(sliders[key].slider.value, 10); }
        const filters = {
            saGauge: parseInt(sortInputs.saGaugeInt.value) + parseFloat(sortInputs.saGaugeFloat.value),
            driveGauge: parseFloat(sortInputs.driveGauge.value),
            starter: sortInputs.starter.value,
            hitCondition: sortInputs.hitCondition.value,
            targetState: sortInputs.targetState.value,
            position: sortInputs.position.value
        };
        const filteredData = comboData.filter(combo => {
            const saOk = (combo.saCost === 'Empty' ? 0 : combo.saCost) <= filters.saGauge;
            const driveOk = (combo.driveCost === 'Empty' ? 0 : combo.driveCost) <= filters.driveGauge;
            const starterOk = filters.starter === 'any' || combo.starter === filters.starter;
            const hitConditionOk = filters.hitCondition === 'any' || combo.hitCondition === filters.hitCondition;
            const targetStateOk = filters.targetState === 'any' || combo.targetState === filters.targetState;
            const positionOk = filters.position === 'any' || combo.position === filters.position;
            return saOk && driveOk && starterOk && hitConditionOk && targetStateOk && positionOk;
        });

        if (filteredData.length === 0) { displayResults([]); return; }

        const stats = {};
        const keysToNormalize = Object.keys(sliders);
        keysToNormalize.forEach(key => {
            const values = filteredData.map(c => c[key] === 'Empty' ? 0 : c[key]);
            stats[`max_${key}`] = Math.max(...values);
            stats[`min_${key}`] = Math.min(...values);
        });
        const normalize = (val, max, min) => (max - min === 0) ? 1 : (val - min) / (max - min);

        const scoredData = filteredData.map(combo => {
            let totalScore = 0;
            keysToNormalize.forEach(key => {
                if (weights[key] > 0) {
                    const value = combo[key] === 'Empty' ? 0 : combo[key];
                    const normalizedValue = normalize(value, stats[`max_${key}`], stats[`min_${key}`]);
                    totalScore += normalizedValue * weights[key];
                }
            });
            return { ...combo, score: totalScore };
        });
        scoredData.sort((a, b) => b.score - a.score);
        displayResults(scoredData);
    }
    
    // --- 結果表示関数 ---
    function displayResults(data) {
        const isMobile = window.innerWidth <= 768;
        resultsBody.innerHTML = '';
        resultsCards.innerHTML = '';
        noResults.style.display = 'none';

        if (!data || data.length === 0) {
            noResults.textContent = '該当するコンボが見つかりませんでした。';
            noResults.style.display = 'block';
            return;
        }

        const maxScore = data.length > 0 ? Math.max(...data.map(d => d.score)) : 0;
        data.forEach((combo, index) => {
            const rank = index + 1;
            const displayScore = maxScore > 0 ? ((combo.score / maxScore) * 100).toFixed(1) : "0.0";
            const notesHTML = combo.notes ? `<div class="result-combo-notes">備考: ${combo.notes}</div>` : '';
            if (isMobile) {
                const card = document.createElement('div');
                card.className = 'result-card card-panel';
                const plusFrameHTML = `<span class="plus-frame" data-frame="${combo.plusFrame}">+F: <b>${combo.plusFrame > 0 ? `+${combo.plusFrame}` : combo.plusFrame}</b></span>`;
                card.innerHTML = `
                    <div class="card-header">
                        <span class="card-rank">${rank}位</span>
                        <span class="card-score">スコア: <b>${displayScore}</b></span>
                    </div>
                    <div class="card-content">
                        <p class="card-combo-name">${combo.comboName}</p>
                        <div class="card-main-stats">
                            <span>DMG: <b>${combo.damage}</b></span>
                            ${combo.plusFrame !== 0 ? plusFrameHTML : `<span>+F: <b>0</b></span>`}
                            <span>D消費: <b>${combo.driveCost}</b></span>
                            <span>SA消費: <b>${combo.saCost}</b></span>
                        </div>
                        <div class="card-sub-stats">
                            <p>始動: ${combo.starter} | 状況: ${combo.hitCondition}</p>
                            <p>対象: ${combo.targetState} | 位置: ${combo.position}</p>
                            <p>運び: ${combo.carry}/5 | 起き攻め: ${combo.okizeme}/5 | 難易度: ${combo.difficulty}/5</p>
                        </div>
                        ${notesHTML ? `<div class="card-notes">${notesHTML.replace(/<br>/g, ' ')}</div>` : ''}
                    </div>
                `;
                resultsCards.appendChild(card);
            } else {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="rank-cell">${rank}</td>
                    <td>
                        <div class="result-combo-name">${combo.comboName}</div>
                        <div class="result-combo-details">
                            <span><strong>始動:</strong> ${combo.starter}</span>
                            <span><strong>状況:</strong> ${combo.hitCondition}</span>
                            <span><strong>対象:</strong> ${combo.targetState}</span>
                            <span><strong>位置:</strong> ${combo.position}</span>
                            <br>
                            <span><strong>運び:</strong> ${combo.carry}/5</span>
                            <span><strong>起き攻め:</strong> ${combo.okizeme}/5</span>
                            <span><strong>難易度:</strong> ${combo.difficulty}/5</span>
                        </div>
                        ${notesHTML}
                    </td>
                    <td class="highlight-cell">${combo.damage}</td>
                    <td class="highlight-cell plus-frame" data-frame="${combo.plusFrame}">${combo.plusFrame > 0 ? `+${combo.plusFrame}` : combo.plusFrame}</td>
                    <td class="highlight-cell">${combo.driveCost}</td>
                    <td class="highlight-cell">${combo.saCost}</td>
                    <td class="result-score">${displayScore}</td>
                `;
                resultsBody.appendChild(row);
            }
        });
    }

    // --- 初期化処理 ---
    function initialize() {
        M.AutoInit();
        modalInstance = M.Modal.getInstance(okiModal);
        populateFilters();
        M.FormSelect.init(document.querySelectorAll('select'));
        sortInputs.driveGauge.addEventListener('input', () => { sortInputs.driveGaugeValue.textContent = parseFloat(sortInputs.driveGauge.value).toFixed(1); });
        Object.keys(sliders).forEach(setupSlider);
        resetButton.click();
    }

    initialize();
});