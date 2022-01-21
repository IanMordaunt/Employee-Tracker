
INSERT INTO department (name)
    VALUES
        (1, 'Sales'),
        (2, 'Engineering'),
        (3, 'Legal'),
        (4, 'Finance');

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
        ('Allan', 'Watts', 1, 3),
        ('Heather', 'Yates', 1, 3),
        ('Cliff', 'Zorn', 2, NULL),
        ('Peter', 'Wrabbit', 5, NULL),
        ('Marco', 'Polo', 3, NULL),
        ('Nancy', 'Spears', 4, 5),
        ('Aman', 'Turkish', 4, 5);