// InicioAdmin.jsx
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaDollarSign, FaShoppingCart, FaChartLine } from 'react-icons/fa';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const stats = {
  gastos: 642.39,
  ganancias: 350.4,
  ventas: 642,
  visitantes: 2579,
};

const lineData = [
  { mes: 'SEP', total: 32000, ganancias: 28000 },
  { mes: 'OCT', total: 34000, ganancias: 30000 },
  { mes: 'NOV', total: 37000, ganancias: 31000 },
  { mes: 'DEC', total: 36000, ganancias: 29000 },
  { mes: 'ENE', total: 8000, ganancias: 32000 },
  { mes: 'FEB', total: 37500, ganancias: 31500 },
];

const barData = [
  { dia: '04', visitas: 400 },
  { dia: '08', visitas: 650 },
  { dia: '10', visitas: 300 },
  { dia: '12', visitas: 500 },
  { dia: '14', visitas: 700 },
  { dia: '16', visitas: 450 },
  { dia: '19', visitas: 800 },
];

const empleadosTop = [
  { nombre: '@J', ventas: 9821, calificacion: 100 },
  { nombre: '@O', ventas: 7032, calificacion: 95 },
  { nombre: '@N', ventas: 5204, calificacion: 90 },
  { nombre: '@A', ventas: 4309, calificacion: 85 },
  { nombre: '@T', ventas: 3871, calificacion: 80 },
  { nombre: '@H', ventas: 3152, calificacion: 75 },
  { nombre: '@A', ventas: 2907, calificacion: 70 },
  { nombre: '@N', ventas: 2309, calificacion: 65 },
];

const productosTop = [
  { nombre: 'RTX 4090', marca: 'Nvidia', ventas: 72, stock: 30 },
  { nombre: 'RTX 4090', marca: 'Nvidia', ventas: 65, stock: 30 },
  { nombre: 'RTX 4090', marca: 'Nvidia', ventas: 58, stock: 30 },
  { nombre: 'RTX 4090', marca: 'Nvidia', ventas: 55, stock: 30 },
  { nombre: 'RTX 4090', marca: 'Nvidia', ventas: 47, stock: 30 },
  { nombre: 'RTX 4090', marca: 'Nvidia', ventas: 42, stock: 30 },
];

const InicioAdmin = () => {
  return (
    <div className="p-6 grid grid-cols-1 xl:grid-cols-4 gap-6">
      {/* Bienvenida */}
      <Card className="xl:col-span-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-3xl font-semibold mb-2">Bienvenido devuelta Mr.Zepeda</h2>
          <p className="text-sm">Hoy es un nuevo día con nuevas metas y ambiciones, tomate con calma el día y déjalo fluir</p>
        </CardContent>
      </Card>

      {/* Top Empleados */}
      <Card className="row-span-2">
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Top Empleados del mes</h3>
            <button className="text-indigo-500 text-sm">Ver más</button>
          </div>
          {empleadosTop.map((emp, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-300" />
                <span>{emp.nombre}</span>
              </div>
              <div className="text-sm">{emp.ventas}</div>
              <div className="w-1/4 h-2 bg-indigo-200 rounded-full">
                <div
                  className="h-2 bg-indigo-500 rounded-full"
                  style={{ width: `${emp.calificacion}%` }}
                ></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Estadísticas y gráficos */}
      <div className="xl:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Gastos del mes</p>
              <h2 className="text-2xl font-bold">${stats.gastos}</h2>
            </div>
            <FaDollarSign className="text-indigo-500 text-2xl" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Ganancias</p>
              <h2 className="text-2xl font-bold">${stats.ganancias}</h2>
            </div>
            <FaChartLine className="text-green-500 text-2xl" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Ventas</p>
              <h2 className="text-2xl font-bold">{stats.ventas}</h2>
            </div>
            <FaShoppingCart className="text-blue-500 text-2xl" />
          </CardContent>
        </Card>

        {/* Línea */}
        <Card className="lg:col-span-2">
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">Totales vs Ganancias</h4>
              <span className="text-xs text-green-500">+2.45%</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="ganancias" stroke="#00C49F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Barras */}
        <Card>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">Tráfico de la página</h4>
              <span className="text-xs text-green-500">+2.45%</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{stats.visitantes}</h2>
            <p className="text-sm text-gray-500">Visitantes</p>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={barData}>
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visitas" fill="#8884d8" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Productos más vendidos */}
      <Card className="row-span-2">
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Productos más vendidos del mes</h3>
            <button className="text-indigo-500 text-sm">Ver más</button>
          </div>
          {productosTop.map((producto, index) => (
            <div key={index} className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gray-200" />
                <div>
                  <p className="text-sm font-medium">{producto.nombre}</p>
                  <p className="text-xs text-gray-500">{producto.marca}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm">{producto.ventas}</p>
                <p className="text-xs text-gray-500">{producto.stock} en stock</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default InicioAdmin;
