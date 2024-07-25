using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using API.Models;

var builder = WebApplication.CreateBuilder(args);

// Configure DbContext with the connection string
builder.Services.AddDbContext<ProjectManagementDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("SqlConStr").ToString());
});

builder.Services.AddControllers();

// Add Swagger services
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "Your API", Version = "v1" });
});

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API v1"));
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseDefaultFiles();
app.UseStaticFiles();


app.Run();
