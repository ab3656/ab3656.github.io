package mum.cs472;

import java.sql.*;

public class DbConnection {

    public Connection getDBConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            return DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/entries", "root", "password");
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }
}
