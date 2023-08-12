// admin queries from adminauth table
exports.selectAdmin = "select * from adminauth";
exports.selectAdminById= "select * from adminauth where id=$1";
                                           
// health care provider queries from healthcareauth
exports.selectHealthcareAuth = "select * from healthcareauth";
exports.selectHealthcareAuthById= "select * from healthcareauth where id=$1";
exports.addHealthcareAuth="insert into healthcareauth(id,username,password) values($1,$2,$3)";
exports.addExistHealthcareAuth="select s from healthcareauth s where s.username=$1";
exports.updateHealthcareAuth="update healthcareauth set username=$1,password=$2 where id=$3";
exports.deleteHealthcareAuth="delete from healthcareauth where id=$1";

// pregnant queries from pregauth
exports.selectPregnantAuth = "select * from  pregauth";
exports.selectPregnantAuthById= "select * from pregauth where id=$1";
exports.addPregnantAuth="insert into pregauth(id,username,password) values($1,$2,$3)";
exports.addExistPregnantAuth="select s from pregauth s where s.username=$1";
exports.updatePregnantAuth="update pregauth set username=$1,password=$2 where id=$3";
exports.deletePregnantAuth="delete from pregauth where id=$1";

// alert notification queries from askhelpnotifica                                                                                                                                 tion
exports.selectAskhelp = "select * from askhelp";
exports.selectAskhelpById= "select * from askhelp where id=$1";
exports.addAskhelp="insert into askhelp(id,name,message) values($1,$2,$3)";
exports.addExistAskhelp="select s from askhelp s where s.message=$1";
exports.deleteAskhelp="delete from askhelp where id=$1";


// visit form queries from visitcard
exports.selectVisitcard = "select * from visitform";
exports.selectVisitcardById= "select * from visitform where id=$1";
exports.addVisitcard="insert into visitform(id,name,weight,pressure,albumin,blood,diabete,gestationalage,gestationalheight,childhorizontal,introduction,childplaying,childheartbeat,oedema) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)";
exports.addExistVisitcard="select s from visitform s where s.id=$1";
exports.updateVisitcard="update visitform set name=$1,weight=$2,pressure=$3,albumin=$4,blood=$5,diabete=$6,gestationalage=$7,gestationalheight=$8,childhorizontal=$9,introduction=$10,childplaying=$11,childheartbeat=$12,oedema=$13 where id=$14";
exports.deleteVisitcard="delete from visitform where id=$1";


// clinic card queries from clinicard
exports.selectClinicard = "select * from clinicform";
exports.selectClinicardById= "select * from clinicform where id=$1";
exports.addClinicard="insert into clinicform(id,clinicname,mothername,motherage,mothereducation,height,pregnancytime,birthtime,childrenliving,miscarriages,year,gestationalage,mothergroup,rh,syphilis,othertest) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)";
exports.addExistClinicard="select s from clinicform s where s.id=$1";
exports.updateClinicard="update clinicform set clinicname=$1,mothername=$2,motherage=$3,mothereducation=$4,height=$5,pregnancytime=$6,birthtime=$7,childrenliving=$8,miscarriages=$9,year=$10,gestationalage=$11,mothergroup=$12,rh=$13,syphilis=$14,othertest=$15 where id=$16";
exports.deleteClinicard="delete from clinicform where id=$1";


// health care data queries from healthcaredetail
exports.selectHealthcareDetail = "select * from healthcaredetail";
exports.selectHealthcareDetailById= "select * from healthcaredetail where id=$1";
exports.addHealthcareDetail="insert into healthcaredetail(id,firstname,middlename,lastname,position,phone) values($1,$2,$3,$4,$5,$6)";
exports.addExistHealthcareDetail="select s from healthcaredetail s where s.phone=$1";
exports.updateHealthcareDetail="update healthcaredetail set firstname=$1,middlename=$2,lastname=$3,position=$4,phone=$5 where id=$6";
exports.deleteHealthcareDetail="delete from healthcaredetail where id=$1";

// pregnant detail queries from pregdetail
exports.selectPregDetail = "select * from pregdetail";
exports.selectPregDetailById= "select * from pregdetail where id=$1";
exports.addPregDetail="insert into pregdetail(id,name,region,district,ward,address,phone) values($1,$2,$3,$4,$5,$6,$7)";
exports.addExistPregDetail="select s from pregdetail s where s.phone=$1";
exports.updatePregDetail="update pregdetail set name=$1,region=$2,district=$3,ward=$4,address=$5,phone=$6 where id=$7";
exports.deletePregDetail="delete from pregdetail where id=$1";