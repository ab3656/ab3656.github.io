package mum.cs472;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@WebServlet(name = "dictServlet")
public class dictServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        DbConnection connection = new DbConnection();
        Connection con = connection.getDBConnection();
        String words = request.getParameter("word");
        System.out.println(words);
        try {
            //here entries is database name, root is username and password
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("select * from entries WHERE word="+words+";");
            String word = "";
            String wordtype = "";
            String definition = "";
            while(rs.next()) {
                word = rs.getString("word");
                wordtype = rs.getString("wordtype");
                definition = rs.getString("definition");
                System.out.println(word);
                System.out.println(wordtype);
                System.out.println(definition);
            }
            con.close();
            request.setAttribute("value", definition);
            response.sendRedirect("/dict.html");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
