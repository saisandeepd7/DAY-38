DB model for Guvi Zen class


CREATE database for Zen

TABLE for users

CREATE TABLE users(userid INTEGER AUTO_INCREMENT PRIMARY KEY,batchid INTEGER,username VARCHAR(100),useremail VARCHAR(100));

INSERT INTO users(username,useremail,batchid) VALUES(B30WD,"sankavi","sankavi@gmail.com"),(B30WD,"Anandhi","anandhi123@gmail.com"),(B30WD,"soundar","soundar@gmail.com"),(B30WD,"vimala","vimala@gmail.com"),(B30WD,"swetha","swetha@gmail.com");
                                                    
                                                    
                                                    
                                                    



TABLE for codekata

CREATE TABLE codekata(userid INTEGER, problems INTEGER, 
    FOREIGN KEY (userid) REFERENCES users(userid));

    INSERT INTO codekata(userid,problems) VALUES(1,102),(2,77),(3,52),(4,65),(5,26);

`


TABLE for task


CREATE TABLE tasks(taskid INTEGER AUTO_INCREMENT PRIMARY KEY, topicid INTEGER,task VARCHAR(1000),
batchid INTEGER,
FOREIGN KEY (topicid) REFERENCES topics(topicid)
);

INSERT INTO tasks(topicid,task,batchid) VALUES (1,"HTML Task",15), (2,"CSS Task",25),(3,"Bootstrap Task",32), (4,"JavaScript Task",35),(5,"React Task",25),;
                                        
                                         
                                        
                                         

TABLE for mentors


 CREATE TABLE mentors(mentorid INTEGER AUTO_INCREMENT PRIMARY KEY,mentorname VARCHAR(100),
 mentoremail VARCHAR(100));

 INSERT INTO mentors(mentorname,mentoremail) VALUES ("Arun","Arun@gmail.com"), ("vijay","vijay@gmail.com"),("Ajith","Ajith@gmail.com"),("sam","sam@gmail.com"),("nivin","nivin@gmail.com");
                                                   
                                                  
                                                   
                                                   


TABLE for topic


 CREATE TABLE topics(topicid INTEGER AUTO_INCREMENT PRIMARY KEY,topic VARCHAR(200),
 topic_date DATE,mentorid INTEGER,batchid INTEGER,
 FOREIGN KEY (mentorid) REFERENCES mentors(mentorid));

 INSERT INTO  topics(mentorid,batchid,topic,topic_date) VALUES(1,B30WD,"HTML Basics","1-07-2021"),(2,B30WD,"CSS Basics","10-07-2021"),(3,B30WD,"Bootstrap-Grid","25-08-2021"),(4,B30WD,"JavaScript","28-08-2021"),(5,B30WD,"React-component","1-09-2021");
                                                               
                                                                       
                                                               


TABLE for attendance


CREATE TABLE attendance(attendanceid INTEGER AUTO_INCREMENT PRIMARY KEY, userid INTEGER,
courseid INTEGER ,topicsid INTEGER, attended BOOLEAN,
FOREIGN KEY (userid) REFERENCES users(userid),
FOREIGN KEY (topicsid) REFERENCES topics(topicsid),
FOREIGN KEY (courseid) REFERENCES courses(courseid)
);
INSERT INTO attendance(userid,courseid,topicsid,attended) VALUES(3,2,5,true),(5,2,3,true),(2,3,3,false), (4,5,5,true),(3,2,2,false);
                                                                
                                                                
                                                               

TABLE for query

                                                               
CREATE TABLE queries(queryid INTEGER AUTO_INCREMENT PRIMARY KEY , userid INTEGER, 
querybody VARCHAR(1000),mentorid INTEGER,
FOREIGN KEY (userid) REFERENCES users(userid),FOREIGN KEY (mentorid) REFERENCES mentors(mentorid)
)

INSERT INTO   queries(userid,querybody,mentorid) VALUES(1,"query about HTML",1),(3,"query about CSS",5),(2,"query about Bootstrap",4),(5,"query about JavaScript",3),(4,"query about React",2);



                                                       
                                                       
                                                       
                                                       


