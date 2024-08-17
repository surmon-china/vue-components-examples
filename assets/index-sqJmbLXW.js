import{s as e,P as n}from"./index-BiIiV-vR.js";import"./index-BBhRLcWf.js";import"./index-DtbE5QCi.js";import"./index-hlbtrNgm.js";const E=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,a={language:()=>e({dialect:n}),code:E};export{a as default};
