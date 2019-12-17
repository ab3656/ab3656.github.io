package mum.cs472;

import java.sql.*;

public class DbConnection {
    private Connection connection;

    public DbConnection() throws ClassNotFoundException, SQLException{
        Class.forName("com.mysql.jdbc.Driver");
        this.connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/entries?autoReconnect=true&useSSL=false", "root", "password");

    }

//    public static void main(String[] args) {
//        try {
//            Class.forName("com.mysql.jdbc.Driver");
//            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/entries", "root", "password");
//
//            Statement stmt=con.createStatement();
//            ResultSet rs=stmt.executeQuery("select * from entries LIMIT 3");
//
//            while(rs.next()) {
//                String word = rs.getString("word");
//                String wordtype = rs.getString("wordtype");
//                String definition = rs.getString("definition");
//                System.out.println(word);
//                System.out.println(wordtype);
//                System.out.println(definition);
//            }
//            con.close();
//
//        } catch (SQLException | ClassNotFoundException e) {
//            e.printStackTrace();
//        }
//    }

    public Connection getConnection(){
        return this.connection;
    }
}
