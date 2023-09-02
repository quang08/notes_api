create database notes_app;

use notes_app;

create table notes (
    id integer primary key auto_increment,
    title varchar(255) not null,
    content text not null,
    created timestamp not null default now()
);

insert into notes (title, content) values ('first note', 'Hello'), ('second note', 'World')