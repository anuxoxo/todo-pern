CREATE DATABASE pernloan;

CREATE TABLE loan(
    id SERIAL PRIMARY KEY,
    application_date date,
    amount numeric,
    interest numeric,
    tenure varchar,
    processing_fee numeric,
    due_amount numeric,
    due_date numeric,
    occupation varchar,
    user_id varchar,
    status varchar,
    l_type varchar,
    firm_person varchar,
    firm_id numeric,
    occ_doc varchar
    FOREIGN KEY(user_id) REFERENCES user(user_id),
    FOREIGN KEY(firm_id) REFERENCES firm(firm_id),
);

CREATE TABLE shop_loan(
    loan_id SERIAL,
    ac_payee_cheque varchar,
    satakhat varchar,
    FOREIGN KEY(loan_id) REFERENCES loan(id) 
);

CREATE TABLE vehicle_loan(
    loan_id SERIAL,
    rc varchar,
    quotation varchar,
    insurance_docs varchar,
    ac_payee_cheque varchar,
    FOREIGN KEY(loan_id) REFERENCES loan(id) 
);

CREATE TABLE running_loans(
    loan_id SERIAL,
    aac_statement varchar,
    sanction_letter varchar,
    noc varchar,
    FOREIGN KEY(loan_id) REFERENCES loan(id) 
);

CREATE TABLE mortgage_loan(
    loan_id SERIAL,
    ac_payee_cheque varchar,
    sales_deed varchar,
    FOREIGN KEY(loan_id) REFERENCES loan(id) 
);

CREATE TABLE od_cc_loan(
    loan_id SERIAL,
    sales_deed varchar,
    FOREIGN KEY(loan_id) REFERENCES loan(id) 
);

CREATE TABLE home_loan(
    loan_id SERIAL,
    hi_type varchar,
    satkhat varchar,
    transfer_documents varchar,
    sales_deed varchar,
    ac_payee_cheque varchar,
    FOREIGN KEY(loan_id) REFERENCES loan(id) 
);

CREATE TABLE machinary_loan(
    loan_id SERIAL,
    experience varchar,
    rubber_stamp varchar,
    FOREIGN KEY(loan_id) REFERENCES loan(id) 
);
CREATE TABLE family_details(
    id SERIAL PRIMARY KEY,
    ml_id SERIAL,
    rc varchar,
    quotation varchar,
    insurance_docs varchar,
    ac_payee_cheque varchar,
    FOREIGN KEY(ml_id) REFERENCES loan(id) 
);




