package mum.cs472;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.*;
import java.util.ArrayList;

@WebServlet(name = "dictServlet")
public class dictServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter a = response.getWriter();
        String words = request.getParameter("word");
        JSONArray data = new JSONArray();
        try {
            DbConnection connection = new DbConnection();
            Connection con = connection.getConnection();
            //here entries is database name, root is username and password
            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery(String.format("select * from entries WHERE word='%s'", words));

            while(rs.next()) {
                JSONObject jsonResponse = new JSONObject();
                jsonResponse.put("word", rs.getString("word"));
                jsonResponse.put("wordtype", rs.getString("wordtype"));
                jsonResponse.put("definition", rs.getString("definition"));
                data.add(jsonResponse);

            }
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        response.setContentType("application/json");
        response.getWriter().write(String.valueOf(data));
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
