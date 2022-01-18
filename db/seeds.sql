
INSERT INTO department (name)
    VALUES
        ('Sales'),
        ('Engineering'),
        ('Legal'),
        ('Finance');

INSERT INTO role (title, salary, department_id)
    VALUES
        ('Salesperson', 80000, 1),
        ('Sales Manager', 110000, 1),
        ('Lead Engineer', 120000, 2),
        ('Software Engineer', 100000, 2),
        ('Lawyer', 150000, 3),
        ('Account Manager', 120000, 4),
        ('Accountant', 100000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Allan', 'Watts', 1, NULL),
        ('Heather', 'Yates', 1, 1),
        ('Cliff', 'Zorn', 2, NULL),
        ('Peter', 'Wrabbit', 2, 2),
        ('Marco', 'Polo', 3, NULL),
        ('Nancy', 'Spears', 4, NULL),
        ('Aman', 'Turkish', 4, 4);